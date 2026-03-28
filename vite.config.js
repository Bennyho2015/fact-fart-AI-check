build: { outDir: 'build', target: 'esnext' }
完整範例（整個檔案）
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    target: 'esnext'
  }
});
