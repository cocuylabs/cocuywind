/**
 * Library version identifier, baked in at build time by tsup (`define`).
 * Format: `<pkg-version>+<build-date>.<git-short-hash>`, e.g.
 * `0.1.0+2026-07-16.5b84495`. Falls back to 'dev' when running from source
 * (vitest, playground) where the define is not applied.
 *
 * Consumers install from git main, so this is the only way to tell which
 * build is live — surface it in a <meta> tag or a dev-only console.info.
 */
declare const __COCUYWIND_VERSION__: string | undefined

export const COCUYWIND_VERSION: string =
  typeof __COCUYWIND_VERSION__ !== 'undefined' ? __COCUYWIND_VERSION__ : 'dev'
