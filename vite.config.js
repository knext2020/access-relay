import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    allowedHosts: ['access-relay.onrender.com']
  },
  preview: {
    allowedHosts: ['access-relay.onrender.com']
  }
});