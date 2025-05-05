import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/weather-app/',  // 👈 यहाँ अपना GitHub repo name दें
  plugins: [react()],
})
