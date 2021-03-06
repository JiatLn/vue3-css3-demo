import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from 'vite-plugin-mock';

import { resolve } from 'path';

function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  resolve: {
    // alias: {
    //   '@': path.resolve(__dirname, 'src'),
    //   comps: path.resolve(__dirname, 'src/components'),
    // },
    alias: [
      // @/xxx => src/xxx
      {
        find: /@\//,
        replacement: pathResolve('src') + '/',
      },
      // /comps/xxx => src/xxx
      {
        find: /\/comps\//,
        replacement: pathResolve('src/components') + '/',
      },
    ],
  },
  plugins: [vue(), vueJsx(), viteMockServe({ supportTs: false })],
}));
