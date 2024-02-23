import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import EnvironmentPlugin from 'vite-plugin-environment'
// https://vitejs.dev/config/

export default defineConfig({
  base: '/trip-app',
  plugins: [react(), EnvironmentPlugin('all')],
  resolve: {
    alias: {
      '@app': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
