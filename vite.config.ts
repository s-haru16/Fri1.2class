import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ ここを追加：前後をスラッシュで囲むこと
  base: '/fri1.2class/', 
})