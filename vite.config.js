import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'; // Importa la librería path para trabajar con rutas

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Establece el alias '@' para que apunte al directorio 'src'
    },
  },
})
