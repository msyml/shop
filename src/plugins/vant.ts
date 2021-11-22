import { App } from 'vue';
import { Skeleton, SwipeCell, Card, Button, Image, Icon, Lazyload } from 'vant';

const vantComps = [Skeleton, SwipeCell, Card, Button, Image, Icon, Lazyload];

export function setupVant(app: App<Element>): void {
  vantComps.forEach((item) => {
    app.use(item);
  });
}
