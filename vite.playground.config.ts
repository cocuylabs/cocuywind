import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, 'playground'),
  server: {
    fs: {
      // Allow Vite to watch and serve source files outside the playground root.
      allow: [path.resolve(__dirname)],
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'cocuywind-playground-url',
      configureServer(server) {
        server.httpServer?.once('listening', () => {
          const info = server.config.server
          const host = info.host && info.host !== true ? info.host : 'localhost'
          const port = info.port ?? 5173
          // Log a direct URL for convenience
          // eslint-disable-next-line no-console
          console.log(`Playground running at http://${host}:${port}`)
        })
      },
    },
  ],
  resolve: {
    alias: {
      'cocuywind/react': path.resolve(__dirname, 'src/react/index.ts'),
      'cocuywind': path.resolve(__dirname, 'src/index.ts'),
    },
  },
})
