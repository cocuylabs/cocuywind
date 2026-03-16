import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, 'playground'),
  plugins: [react()],
  resolve: {
    alias: {
      'tailtheme/react': path.resolve(__dirname, 'src/react/index.ts'),
      'tailtheme': path.resolve(__dirname, 'src/index.ts'),
    },
  },
})
