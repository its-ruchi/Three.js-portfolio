import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // This is correct if you're importing the postcss config properly
  },
  server: {
    open: true,  // Automatically opens the browser
    hot: true,   // Enables Hot Module Replacement
  },
  publicDir: 'public',  // Specifies the directory for static assets
});
