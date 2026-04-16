// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// 単一の静的HTMLとしてビルド（SSR・アダプターなし）
export default defineConfig({
  output: 'static',
  compressHTML: false,
  server: {
    port: 4321,
  },
	build: {
		inlineStylesheets: 'never',
		format: 'file',
	},
  vite: {
    server: {
      port: 4321,
      strictPort: true,
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'asset/topics/campaign/mothers_day/js/[name].js',
          chunkFileNames: 'asset/topics/campaign/mothers_day/js/[name].js',
          assetFileNames: '_astro/[name]-[hash][extname]',
        },
      },
    },
  },
});