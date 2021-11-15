import { createApp } from 'vue';
import App from './App.vue';
import { setupStore } from '@/store';
import router, { setupRouter } from '@/router';
// 引入SVG图标
import 'https://at.alicdn.com/t/font_2930737_2szkt8tcg0k.js?spm=a313x.7781069.1998910419.40&file=font_2930737_2szkt8tcg0k.js';
// import './assets/iconfont.js'

async function bootstrap() {
  const app = createApp(App);
  // 挂载状态管理
  setupStore(app);
  // 挂载路由
  await setupRouter(app);
  // 路由就绪后挂载APP
  await router.isReady();

  app.mount('#app');
}

bootstrap();
