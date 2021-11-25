import { App } from 'vue';
import {
  Skeleton,
  SwipeCell,
  Card,
  Button,
  Image,
  Icon,
  Lazyload,
  Switch,
  Tab,
  Tabs,
  Notify,
  ConfigProvider,
  Step,
  Steps,
} from 'vant';

const vantComps = [
  Skeleton,
  SwipeCell,
  Card,
  Button,
  Image,
  Icon,
  Lazyload,
  Switch,
  Tab,
  Tabs,
  Notify,
  ConfigProvider,
  Step,
  Steps,
];

export function setupVant(app: App<Element>): void {
  vantComps.forEach((item) => {
    app.use(item);
  });
}
