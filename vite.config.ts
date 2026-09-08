import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const rootDir = fileURLToPath(new URL('.', import.meta.url))
const srcDir = path.resolve(rootDir, 'src')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': srcDir,
      '@assets': path.resolve(srcDir, 'assets'),
      '@resources': path.resolve(srcDir, 'resources'),
      '@components': path.resolve(srcDir, 'components'),
      '@pages': path.resolve(srcDir, 'pages'),
      '@icons': path.resolve(srcDir, 'components/icons'),
      '@styles': path.resolve(srcDir, 'styles'),
      '@strings': path.resolve(srcDir, 'strings'),
      '@configs': path.resolve(srcDir, 'configs'),
    },
  },
})
