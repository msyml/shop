<template>
  <div>
    <SimpleTitle>
      <template v-slot:title>
        {{ title }}
      </template>
    </SimpleTitle>
    <router-view></router-view>
    <SimpleTabBar></SimpleTabBar>
  </div>
</template>

<script lang="ts" setup>
  import { SimpleTabBar, SimpleTitle } from '@/components';
  import { useStore } from 'vuex';
  import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router';
  import { computed, onMounted } from 'vue';
  const router = useRouter();
  const route = useRoute();
  const store = useStore();

  const title = computed(() => {
    return store.state.title;
  });

  onMounted(() => {
    handlerRefresh();
  });

  const handlerRefresh = () => {
    // 刷新时给title赋值
    router.isReady().then(() => {
      let arr = router.getRoutes().filter((item) => item.path === route.path);
      if (arr.length > 0) {
        store.commit('changeTitle', arr[0].meta.title);
      }
    });
  };

  onBeforeRouteUpdate((to) => {
    if (to.meta.title) {
      store.commit('changeTitle', to.meta.title);
    }
  });
</script>

<style scoped lang="less"></style>
