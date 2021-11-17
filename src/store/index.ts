// src/store/index.ts
import type { App } from 'vue';
import { createStore } from 'vuex';
// 定义state类型
export interface IIndexState {
  count: number;
  title: string;
}
// 创建实例
const store = createStore({
  state(): IIndexState {
    return {
      count: 0,
      title: '',
    };
  },
  getters: {
    getCount(state: IIndexState): number {
      return state.count;
    },
    getTitle(state: IIndexState): string {
      return state.title;
    },
  },
  mutations: {
    increment(state: IIndexState) {
      state.count += 1;
    },
    changeTitle(state: IIndexState, str: string) {
      state.title = str;
    },
  },
  actions: {
    asyncIncrement(context) {
      context.commit('increment');
    },
    asyncChangeTitle(context, str: string) {
      context.commit('changeTitle', str);
    },
  },
});

export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };
