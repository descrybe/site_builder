import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': `${path.resolve(__dirname, "./src/components/")}`,
      '@store': `${path.resolve(__dirname, "./src/store/")}`,
      '@constants': `${path.resolve(__dirname, "./src/constants/")}`,
      '@pages': `${path.resolve(__dirname, "./src/pages/")}`,
      '@helpers': `${path.resolve(__dirname, "./src/helpers/")}`,
      '@pagesComponent': `${path.resolve(__dirname, "./src/pagesComponent/")}`,
    }
  }
})
