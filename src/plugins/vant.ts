import { App } from 'vue';
import { Skeleton } from 'vant';

const vantComps = [Skeleton];

export function setupVant(app: App<Element>): void {
  vantComps.forEach((item) => {
    app.use(item);
  });
}
