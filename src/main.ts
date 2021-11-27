import { createApp } from 'vue';
import App from './App.vue';
import { setupStore } from '@/store';
import router, { setupRouter } from '@/router';
import { setupVant } from '@/plugins';
// 引入SVG图标
import 'https://at.alicdn.com/t/font_2930737_m8epb6adocc.js?spm=a313x.7781069.1998910419.40&file=font_2930737_m8epb6adocc.js';
// import './assets/iconfont.js'

async function bootstrap() {
  const app = createApp(App);
  // 注册全局常用vant组件
  setupVant(app);
  // 挂载状态管理
  setupStore(app);
  // 挂载路由
  await setupRouter(app);
  // 路由就绪后挂载APP
  await router.isReady();

  app.mount('#app');
}

bootstrap();
