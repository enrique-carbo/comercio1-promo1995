import path from 'path';
import process from 'process';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/', 
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react() , tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd()),
      }
    }
});