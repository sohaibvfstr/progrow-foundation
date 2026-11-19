import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Deploy the contents of dist at the domain's document root.
  base: '/',
  build: {
    target: 'es2020',
    sourcemap: false,
  },
  server: {
    host: true, // listen on all addresses (0.0.0.0, localhost, 127.0.0.1)
    port: 5173,
    strictPort: true,
  },
  preview: {
    host: true,
    port: 5173,
    strictPort: true,
  }
});
