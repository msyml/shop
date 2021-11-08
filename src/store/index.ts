// src/store/index.ts
import { createStore } from 'vuex';

export interface IIndexState{
    count: number;
}

const store = createStore({
  // vuex相关内容
  state(): IIndexState {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state: IIndexState) {
      state.count += 1;
    },
  },
});

export default store;
