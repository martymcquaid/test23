import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/cec6fadb-31de-48a6-8c67-e8a3063d2a7e/preview/',
  plugins: [react()],
  server: {
    port: 5158,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      port: 5158,
    },
  },
})
