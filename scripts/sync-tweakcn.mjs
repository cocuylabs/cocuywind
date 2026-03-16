#!/usr/bin/env node
/**
 * sync-tweakcn.mjs
 *
 * Fetches the TweakCN theme registry and/or community themes and adds
 * any that are not already present. Never overwrites existing files.
 *
 * Usage:
 *   pnpm sync:tweakcn
 *   pnpm sync:tweakcn --community # community themes only
 *   pnpm sync:tweakcn --all       # registry + community themes
 *   pnpm sync:tweakcn --dry-run   # print what would be added without writing
 */

import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const TWEAKCN_DIR = join(__dirname, '../src/themes/tweakcn')
const TWEAKCN_INDEX  = join(TWEAKCN_DIR, 'index.ts')
const COMMUNITY_DIR  = join(__dirname, '../src/themes/community')
const COMMUNITY_INDEX = join(COMMUNITY_DIR, 'index.ts')
const COMMUNITY_LABEL_OVERRIDES = join(__dirname, './community-label-overrides.json')
const DRY_RUN     = process.argv.includes('--dry-run')
const INCLUDE_COMMUNITY = process.argv.includes('--community') || process.argv.includes('--all')
const INCLUDE_TWEAKCN = process.argv.includes('--all') || !process.argv.includes('--community')

const TOKEN_KEYS = [
  '--background', '--foreground',
  '--card', '--card-foreground',
  '--popover', '--popover-foreground',
  '--primary', '--primary-foreground',
  '--secondary', '--secondary-foreground',
  '--muted', '--muted-foreground',
  '--accent', '--accent-foreground',
  '--destructive', '--destructive-foreground',
  '--border', '--input', '--ring',
]

const CSS_TO_TS = {
  '--background':            'background',
  '--foreground':            'foreground',
  '--card':                  'card',
  '--card-foreground':       'cardForeground',
  '--popover':               'popover',
  '--popover-foreground':    'popoverForeground',
  '--primary':               'primary',
  '--primary-foreground':    'primaryForeground',
  '--secondary':             'secondary',
  '--secondary-foreground':  'secondaryForeground',
  '--muted':                 'muted',
  '--muted-foreground':      'mutedForeground',
  '--accent':                'accent',
  '--accent-foreground':     'accentForeground',
  '--destructive':           'destructive',
  '--destructive-foreground':'destructiveForeground',
  '--border':                'border',
  '--input':                 'input',
  '--ring':                  'ring',
}

// 'modern-minimal' → 'modernMinimal'
function toCamel(name) {
  return name.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase())
}

// 'modern-minimal' → 'modernMinimalTheme'
function toExport(name) {
  return `${toCamel(name)}Theme`
}

function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function toLabel(name) {
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
}

function normalizeCommunityLabel(name) {
  const s = (name || '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/[^\w\s&/().:+-]/g, '')
    .trim()

  if (!s) return 'Community Theme'

  const typoMap = {
    deisgne: 'design',
    designe: 'design',
    thheme: 'theme',
    porfolio: 'portfolio',
    popins: 'poppins',
  }

  const words = s.split(' ').map(w => {
    const lower = w.toLowerCase()
    if (typoMap[lower]) w = typoMap[lower]
    if (/^(UI|UX|API|CSS|RGB|HSL|OKLCH|V\d+|\d+|v\d+)$/i.test(w)) return w.toUpperCase()
    if (/^[A-Z0-9]{2,}$/.test(w)) return w
    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
  })

  return words.join(' ')
}

function hashString(input) {
  let hash = 0
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0
  }
  return hash
}

function creativeLabelFromName(name) {
  const adjectives = ['Aurora', 'Copper', 'Midnight', 'Ivory', 'Sage', 'Cobalt', 'Crimson', 'Dune', 'Opal', 'Echo', 'Lumen', 'Nimbus']
  const nouns = ['Drift', 'Signal', 'Harbor', 'Bloom', 'Field', 'Atlas', 'Canyon', 'Studio', 'Circuit', 'Canvas', 'Vista', 'Orbit']
  const h = hashString(name)
  return `${adjectives[h % adjectives.length]} ${nouns[(h >>> 4) % nouns.length]}`
}

function labelFromSlug(slug) {
  const cleaned = slug.replace(/-+/g, ' ').trim()
  if (!cleaned) return null
  const words = cleaned.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
  return words.join(' ')
}

function escapeTS(value) {
  return value.replace(/\\/g, '\\\\').replace(/'/g, '\\\'')
}

function formatTokenBlock(vars) {
  const PAD = 24 // align values
  return TOKEN_KEYS
    .filter(k => vars[k])
    .map(k => {
      const tsKey = CSS_TO_TS[k]
      const value = vars[k].trim()
      return `    ${(tsKey + ':').padEnd(PAD)} raw('${value}'),`
    })
    .join('\n')
}

function generateThemeFile(item) {
  const exportName = toExport(item.name)
  const light = item.cssVars?.light ?? {}
  const dark  = item.cssVars?.dark  ?? {}
  const combined = { ...(item.cssVars?.light ?? {}), ...(item.cssVars?.theme ?? {}) }
  const radius = (combined['--radius'] ?? '0.5rem').trim()
  const label = item.title ?? toLabel(item.name)

  return `// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const ${exportName} = defineTheme({
  name: '${escapeTS(item.name)}',
  label: '${escapeTS(label)}',
  light: {
${formatTokenBlock(light)}
  },
  dark: {
${formatTokenBlock(dark)}
  },
  radius: '${radius}',
})
`
}

function formatTokenBlockFromStyles(styles) {
  const vars = {}
  for (const key of TOKEN_KEYS) {
    const cssKey = key.replace(/^--/, '')
    if (styles?.[cssKey]) vars[key] = styles[cssKey]
  }
  return formatTokenBlock(vars)
}

function hasAllTokens(styles) {
  for (const key of TOKEN_KEYS) {
    const cssKey = key.replace(/^--/, '')
    if (!styles?.[cssKey]) return false
  }
  return true
}

function generateCommunityThemeFile({ name, label, sourceName, styles, radius, fonts }) {
  const exportName = toExport(name)
  const fontBlock = fonts && (fonts.body || fonts.heading)
    ? `  fonts: {\n${fonts.body ? `    body: '${escapeTS(fonts.body)}',\n` : ''}${fonts.heading ? `    heading: '${escapeTS(fonts.heading)}',\n` : ''}  },\n`
    : ''

  return `// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const ${exportName} = defineTheme({
  name: '${escapeTS(name)}',
  label: '${escapeTS(label)}',
  _sourceName: '${escapeTS(sourceName)}',
  category: 'Community',
  light: {
${formatTokenBlockFromStyles(styles.light)}
  },
  dark: {
${formatTokenBlockFromStyles(styles.dark)}
  },
${fontBlock}  radius: '${radius}',
})
`
}

function loadCommunityLabelOverrides() {
  if (!existsSync(COMMUNITY_LABEL_OVERRIDES)) return {}
  try {
    const json = JSON.parse(readFileSync(COMMUNITY_LABEL_OVERRIDES, 'utf8'))
    return typeof json === 'object' && json ? json : {}
  } catch {
    return {}
  }
}

function ensureCommunityIndex() {
  if (!existsSync(COMMUNITY_DIR)) {
    if (!DRY_RUN) {
      mkdirSync(COMMUNITY_DIR, { recursive: true })
    }
  }

  if (!existsSync(COMMUNITY_INDEX)) {
    const base = `// Community themes from tweakcn.com (user-submitted)\n// These are intentionally kept separate so consumers can opt-in.\n\nexport const communityThemes = [\n]\n`
    if (!DRY_RUN) writeFileSync(COMMUNITY_INDEX, base, 'utf8')
  }
}

function updateIndex(newThemes, { indexFile, arrayName }) {
  const src = readFileSync(indexFile, 'utf8')
  const lines = src.split('\n')

  const exportLines = newThemes.map(({ name }) => `export { ${toExport(name)} } from './${name}.js'`)
  const importLines = newThemes.map(({ name }) => `import { ${toExport(name)} } from './${name}.js'`)
  const arrayEntries = newThemes.map(({ name }) => `  ${toExport(name)},`)

  const lastExportIdx = [...lines].map((l, i) => (l.startsWith('export {') ? i : -1)).filter(i => i >= 0).pop()
  const lastImportIdx = [...lines].map((l, i) => (l.startsWith('import {') ? i : -1)).filter(i => i >= 0).pop()
  const arrayStartIdx = lines.findIndex(l => l.startsWith(`export const ${arrayName}`))
  const arrayEndIdx = arrayStartIdx >= 0
    ? lines.slice(arrayStartIdx).findIndex(l => l.trim() === ']') + arrayStartIdx
    : -1

  if (arrayStartIdx < 0 || arrayEndIdx < 0) {
    throw new Error('index.ts layout not recognized; cannot update')
  }

  const insertExportIdx = lastExportIdx >= 0
    ? lastExportIdx + 1
    : Math.max(0, Math.min(arrayStartIdx, lines.length))
  lines.splice(insertExportIdx, 0, ...exportLines)

  const importInsertBase = lastImportIdx >= 0
    ? lastImportIdx + 1
    : Math.max(0, Math.min(arrayStartIdx + exportLines.length, lines.length))
  lines.splice(importInsertBase, 0, ...importLines)

  const arrayInsertIdx = arrayEndIdx + exportLines.length + importLines.length
  lines.splice(arrayInsertIdx, 0, ...arrayEntries)

  return lines.join('\n')
}

async function getCommunityActionRequestWithPlaywright() {
  const { chromium } = await import('playwright')
  const browser = await chromium.launch({ headless: true })
  try {
    const page = await browser.newPage()
    let actionReq = null
    page.on('request', r => {
      if (r.url() === 'https://tweakcn.com/community'
        && r.method() === 'POST'
        && r.headers()['next-action']) {
        actionReq = r
      }
    })
    await page.goto('https://tweakcn.com/community', { waitUntil: 'networkidle' })
    await page.waitForTimeout(3000)
    if (!actionReq) throw new Error('Community action request not captured')
    const h = actionReq.headers()
    const passthrough = {}
    for (const key of ['next-router-state-tree', 'x-deployment-id', 'referer']) {
      if (h[key]) passthrough[key] = h[key]
    }
    return {
      actionId: h['next-action'],
      headers: passthrough,
      body: actionReq.postData(),
    }
  } finally {
    await browser.close()
  }
}


async function fetchCommunityThemesPage(actionId, { sort, cursor, limit, filter, tags, timeRange, headers, bodyOverride }) {
  const body = bodyOverride ?? JSON.stringify([sort, cursor ?? null, limit, filter, tags, timeRange])
  const res = await fetch('https://tweakcn.com/community', {
    method: 'POST',
    headers: {
      'Next-Action': actionId,
      'Accept': 'text/x-component',
      'Content-Type': 'text/plain;charset=UTF-8',
      ...(headers ?? {}),
    },
    body,
  })
  if (!res.ok) {
    throw new Error(`Community themes fetch failed: ${res.status} ${res.statusText}`)
  }
  const text = await res.text()
  const lines = text.split('\n')
  for (const line of lines) {
    const m = line.match(/^(\d+):(.*)$/)
    if (!m) continue
    try {
      const obj = JSON.parse(m[2])
      if (obj && Array.isArray(obj.themes)) return obj
    } catch { /* ignore */ }
  }
  throw new Error('Community themes response not recognized')
}

async function syncRegistryThemes() {
  console.log('Fetching TweakCN registry…')
  const registryRes = await fetch('https://tweakcn.com/r/themes/registry.json')
  if (!registryRes.ok) {
    throw new Error(`Registry fetch failed: ${registryRes.status} ${registryRes.statusText}`)
  }
  const registryJson = await registryRes.json()
  const registry = Array.isArray(registryJson)
    ? registryJson
    : (registryJson?.themes ?? registryJson?.data ?? [])
  if (!Array.isArray(registry)) {
    throw new Error('Registry response shape not recognized')
  }
  console.log(`  ${registry.length} themes in registry`)

  const existing = new Set(
    Object.keys(
      Object.fromEntries(
        readFileSync(TWEAKCN_INDEX, 'utf8')
          .match(/from '\.\/([^']+)\.js'/g)
          ?.map(m => [m.match(/\.\/([^']+)\.js/)[1], true]) ?? []
      )
    )
  )

  const toAdd = registry.filter(entry => entry?.name && !existing.has(entry.name))

  if (toAdd.length === 0) {
    console.log('Nothing to add — all registry themes already ported.')
    return
  }

  console.log(`\nNew themes to add (${toAdd.length}):`)
  toAdd.forEach(e => console.log(`  + ${e.name}`))

  if (DRY_RUN) {
    console.log('\n--dry-run: no files written.')
    return
  }

  console.log('\nFetching theme data…')
  const fetched = await Promise.all(
    toAdd.map(async entry => {
      const item = await fetch(`https://tweakcn.com/r/themes/${entry.name}.json`).then(r => r.json())
      return item
    })
  )

  const added = []
  for (const item of fetched) {
    const filePath = join(TWEAKCN_DIR, `${item.name}.ts`)
    if (existsSync(filePath)) {
      console.log(`  SKIP ${item.name} (file already exists)`)
      continue
    }

    const content = generateThemeFile(item)
    writeFileSync(filePath, content, 'utf8')
    console.log(`  WRITE ${item.name}.ts`)
    added.push(item)
  }

  if (added.length > 0) {
    const newIndexSrc = updateIndex(added, { indexFile: TWEAKCN_INDEX, arrayName: 'tweakcnThemes' })
    writeFileSync(TWEAKCN_INDEX, newIndexSrc, 'utf8')
    console.log(`\nUpdated tweakcn index.ts (+${added.length} themes)`)
    console.log('Run `pnpm build` to rebuild the library.')
  }
}

async function syncCommunityThemes() {
  ensureCommunityIndex()

  console.log('Fetching TweakCN community themes…')
  let actionId = null
  let actionHeaders = null
  let actionBody = null
  const req = await getCommunityActionRequestWithPlaywright()
  actionId = req.actionId
  actionHeaders = req.headers
  actionBody = req.body

  const allThemes = []
  let cursor = null
  const limit = 50

  while (true) {
    const page = await fetchCommunityThemesPage(actionId, {
      sort: 'popular',
      cursor,
      limit,
      filter: 'all',
      tags: [],
      timeRange: 'all',
      headers: actionHeaders,
      bodyOverride: cursor == null ? actionBody : null,
    })
    if (Array.isArray(page.themes)) {
      allThemes.push(...page.themes)
    }
    if (page.nextCursor == null || page.nextCursor === cursor) break
    cursor = page.nextCursor
  }

  console.log(`  ${allThemes.length} themes in community list`)

  const existing = new Set(
    Object.keys(
      Object.fromEntries(
        (existsSync(COMMUNITY_INDEX) ? readFileSync(COMMUNITY_INDEX, 'utf8') : '')
          .match(/from '\.\/([^']+)\.js'/g)
          ?.map(m => [m.match(/\.\/([^']+)\.js/)[1], true]) ?? []
      )
    )
  )

  const toAdd = []
  const overrides = loadCommunityLabelOverrides()
  const genericLabels = new Set(['Theme', 'Community Theme', 'My Theme', 'Test', 'Something', 'Default'])

  for (const theme of allThemes) {
    if (!theme?.styles?.light || !theme?.styles?.dark) continue
    if (!hasAllTokens(theme.styles.light) || !hasAllTokens(theme.styles.dark)) {
      console.log(`  SKIP ${theme.name ?? theme.id} (missing core tokens)`)
      continue
    }
    const slug = toSlug(theme.name || '')
    const shortId = (theme.id || theme.themeId || '').slice(0, 6)
    const base = slug || `theme-${shortId}`
    const name = `community-${base}-${shortId}`.replace(/-+$/g, '')
    if (existing.has(name)) continue
    const rawSourceName = theme.name || name
    const overrideLabel = overrides[rawSourceName]
    let label = overrideLabel || normalizeCommunityLabel(rawSourceName)
    if (label.length <= 2 || genericLabels.has(label)) {
      const slugLabel = labelFromSlug(base)
      label = slugLabel && slugLabel.length > 2 ? slugLabel : creativeLabelFromName(name)
    }
    toAdd.push({ name, theme, label, sourceName: rawSourceName })
  }

  if (toAdd.length === 0) {
    console.log('Nothing to add — all community themes already ported.')
    return
  }

  console.log(`\nNew community themes to add (${toAdd.length}):`)
  toAdd.forEach(e => console.log(`  + ${e.name}`))

  if (DRY_RUN) {
    console.log('\n--dry-run: no files written.')
    return
  }

  const added = []
  for (const entry of toAdd) {
    const { name, theme } = entry
    const filePath = join(COMMUNITY_DIR, `${name}.ts`)
    if (existsSync(filePath)) {
      console.log(`  SKIP ${name} (file already exists)`)
      continue
    }

    const radius = (theme.styles.light?.radius || theme.styles.dark?.radius || '0.5rem').toString().trim()
    const fonts = {
      body: theme.styles.light?.['font-sans'] || theme.styles.dark?.['font-sans'],
      heading: theme.styles.light?.['font-serif'] || theme.styles.dark?.['font-serif'],
    }

    const content = generateCommunityThemeFile({
      name,
      label: entry.label,
      sourceName: entry.sourceName,
      styles: theme.styles,
      radius,
      fonts,
    })
    writeFileSync(filePath, content, 'utf8')
    console.log(`  WRITE ${name}.ts`)
    added.push({ name })
  }

  if (added.length > 0) {
    const newIndexSrc = updateIndex(added, { indexFile: COMMUNITY_INDEX, arrayName: 'communityThemes' })
    writeFileSync(COMMUNITY_INDEX, newIndexSrc, 'utf8')
    console.log(`\nUpdated community index.ts (+${added.length} themes)`)
    console.log('Run `pnpm build` to rebuild the library.')
  }
}

async function main() {
  if (INCLUDE_TWEAKCN) await syncRegistryThemes()
  if (INCLUDE_COMMUNITY) await syncCommunityThemes()
}

main().catch(err => { console.error(err); process.exit(1) })
