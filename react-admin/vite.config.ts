import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host:true,
    port: 5174 // Replace 5174 with your desired port number
  },
  plugins: [react()],
})