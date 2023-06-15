import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  assetsInclude: ['**/*.jpg'], // Add this line to include .jpg files as assets
});
