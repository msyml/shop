import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path';
import styleImport from 'vite-plugin-style-import';
// import postCssPxToViewport from 'postcss-px-to-viewport';

export default defineConfig({
  resolve: {
    // 配置别名，简化引用
    alias: {
      '@': path.resolve(__dirname, 'src'),
      api: path.resolve(__dirname, 'src/api'),
      comps: path.resolve(__dirname, 'src/components'),
      enums: path.resolve(__dirname, 'src/enums'),
      views: path.resolve(__dirname, 'src/views'),
      utils: path.resolve(__dirname, 'src/utils'),
      router: path.resolve(__dirname, 'src/router'),
      store: path.resolve(__dirname, 'src/store'),
      styles: path.resolve(__dirname, 'src/styles'),
      assets: path.resolve(__dirname, 'src/assets'),
      plugins: path.resolve(__dirname, 'src/plugins'),
    },
  },
  plugins: [
    vue(),
    viteMockServe({
      mockPath: './mock',
      supportTs: true,
    }),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
    // postCssPxToViewport({
    //   viewportWidth: 375,
    // }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true,
        // .vue不用手动引入
        additionalData: `@import "src/styles/variable.less";`,
      },
    },
  },
});
