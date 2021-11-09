// src/store/index.ts
import type { App } from 'vue';
import { createStore } from 'vuex';
// 定义state类型
export interface IIndexState {
  count: number;
}
// 创建实例
const store = createStore({
  state(): IIndexState {
    return {
      count: 0,
    };
  },
  getters: {
    getCount(state: IIndexState): number {
      return state.count;
    },
  },
  mutations: {
    increment(state: IIndexState) {
      state.count += 1;
    },
  },
  actions: {
    asyncIncrement(context) {
      context.commit('increment');
    },
  },
});

export function setupStore(app: App<Element>){
    app.use(store);
}

export {store};