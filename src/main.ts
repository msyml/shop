import { createApp } from 'vue';
import App from './App.vue';
import { setupStore } from '@/store';
import router, { setupRouter } from '@/router';
import './assets/iconfont.js'

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
