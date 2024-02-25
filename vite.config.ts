import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import EnvironmentPlugin from 'vite-plugin-environment'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), EnvironmentPlugin('all')],
  base: '/trip-app/',
  resolve: {
    alias: {
      '@app': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
