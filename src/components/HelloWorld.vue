<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getProductList } from '@/api';
import { useStore } from 'vuex';

const store = useStore();

defineProps({
  msg: String,
});

console.log(store.getters.getCount);
store.dispatch('asyncIncrement');
console.log(store.getters.getCount);

onMounted(() => {
  getProductList({}).then((res) => {
    console.log(res);
  });
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
