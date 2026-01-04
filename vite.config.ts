import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true
      },
      onwarn: (warning, handler) => {
        if (warning.code === 'css_unused_selector') return;
        handler(warning);
      }
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'poly-ui',
      fileName: (format) => `poly-ui.${format}.js`,
      formats: ['es']
    },
    rollupOptions: {
      external: [], // Add peer dependencies here
      output: {
        globals: {}
      }
    }
  }
});
