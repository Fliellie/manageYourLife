import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite' // <--- THÊM ĐÚNG DÒNG NÀY VÀO ĐÂY!

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), // <--- Giờ thì dòng này sẽ hết bị gạch đỏ ngay lập tức!
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})