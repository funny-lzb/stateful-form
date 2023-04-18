import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import basicSsl from '@vitejs/plugin-basic-ssl'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  server: {
    proxy: {
      '/api': {
        target: 'https://drive.google.com',
        changeOrigin: true,
        https: true,
        rewrite: path => path.replace(/^\/api/, ''),
        headers: {
          Referer: 'https://drive.google.com',
        },
      },
    },
  },
})
