import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    ...(mode === 'development'
      ? [
          eslint({
            include: ['src/**/*.ts', 'src/**/*.tsx'],
            cache: false,
            emitError: true,
          }),
        ]
      : []),
  ],
  build: {
    outDir: 'dist',
    sourcemap: mode === 'development',
  },
  server: {
    open: true,
  },
}));
