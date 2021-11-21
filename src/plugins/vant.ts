import { App } from 'vue';
import { Skeleton, SwipeCell, Card, Button, Image, Icon } from 'vant';

const vantComps = [Skeleton, SwipeCell, Card, Button, Image, Icon];

export function setupVant(app: App<Element>): void {
  vantComps.forEach((item) => {
    app.use(item);
  });
}
