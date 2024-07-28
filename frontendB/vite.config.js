import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 7101, 
    proxy: {
      '/api': {
        target: 'http://routine-backend.bct.itclub.pp.ua', 
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
