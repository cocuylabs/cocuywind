import { defineConfig } from 'tsup'
import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))

function gitShortHash(): string {
  try {
    return execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim()
  } catch {
    return 'unknown'
  }
}

// Note: `pnpm build` runs before the release commit exists, so the hash is
// the parent commit at build time — the date disambiguates builds.
const buildDate = new Date().toISOString().slice(0, 10)
const version = `${pkg.version}+${buildDate}.${gitShortHash()}`

const define = { __COCUYWIND_VERSION__: JSON.stringify(version) }

export default defineConfig([
  {
    entry: { index: 'src/index.ts' },
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
    clean: true,
    external: ['react', 'react-dom'],
    outExtension: ({ format }) => ({ js: format === 'cjs' ? '.cjs' : '.mjs' }),
    define,
  },
  {
    entry: { react: 'src/react/index.ts' },
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
    external: ['react', 'react-dom'],
    outExtension: ({ format }) => ({ js: format === 'cjs' ? '.cjs' : '.mjs' }),
    define,
  },
])
