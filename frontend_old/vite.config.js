import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath } from 'node:url'
import path from 'path'
import { defineConfig } from 'vite'



export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
	  'src': fileURLToPath(new URL('src' , import.meta.url)),
	  'assets': fileURLToPath(new URL('src/assets' , import.meta.url)),
	  'components': fileURLToPath(new URL('src/components' , import.meta.url)),
	  'dojo': fileURLToPath(new URL('src/dojo' , import.meta.url)),
	  'common': fileURLToPath(new URL('src/common' , import.meta.url)),
	  'vommond': fileURLToPath(new URL('src/vommond' , import.meta.url)),
	  'views': fileURLToPath(new URL('src/views' , import.meta.url)),
	  'canvas': fileURLToPath(new URL('src/canvas' , import.meta.url)),
	  'page': fileURLToPath(new URL('src/page' , import.meta.url)),
	  'user': fileURLToPath(new URL('src/user' , import.meta.url)),
	  'core': fileURLToPath(new URL('src/core' , import.meta.url)),
	  'dash': fileURLToPath(new URL('src/dash' , import.meta.url)),
	  'public': fileURLToPath(new URL('src/public' , import.meta.url)),
	  'services': fileURLToPath(new URL('src/services' , import.meta.url)),
	  'nls': fileURLToPath(new URL('src/nls' , import.meta.url)),
	  'themes': fileURLToPath(new URL('src/themes' , import.meta.url)),
	  'export': fileURLToPath(new URL('src/export' , import.meta.url)),
	  'examples': fileURLToPath(new URL('src/examples' , import.meta.url)),
	  'help': fileURLToPath(new URL('src/help' , import.meta.url)),
	  'player': fileURLToPath(new URL('src/player' , import.meta.url)),
	  'style': fileURLToPath(new URL('src/style' , import.meta.url)),
    },
  },
  build: {
    outDir: `../${path.basename(path.resolve('..'))}/public/frontend`,
    emptyOutDir: true,
    sourcemap: true,
  },
  optimizeDeps: {
    entries: [
      './src/**/*.vue',
    ],
  },
})
