<template>
  <div class="shop">
    <SimpleTitle class="title" v-bind="options">
      <template v-slot:title>
        <span v-if="!options.customTitle">
          <SimpleIcon v-if="options.icon" class="icon" :icon="options.icon"></SimpleIcon
          >{{ options.title }}
        </span>
        <span v-else>{{ storeTitle }}</span>
      </template>
    </SimpleTitle>
    <router-view class="base"></router-view>
    <SimpleTabBar class="tab"></SimpleTabBar>
  </div>
</template>

<script lang="ts" setup>
  import { SimpleTabBar, SimpleTitle, SimpleIcon } from '@/components';
  import { TitleOptions } from './types';
  import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router';
  import { computed, onMounted, ref } from 'vue';
  import { useStore } from 'vuex';
  const router = useRouter();
  const store = useStore();
  const route = useRoute();
  const options = ref<TitleOptions>({
    title: '',
  });

  const storeTitle = computed(() => {
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
        options.value = { ...arr[0].meta } as unknown as TitleOptions;
      }
    });
  };

  onBeforeRouteUpdate((to) => {
    if (to.meta) {
      options.value = { ...to.meta } as unknown as TitleOptions;
    }
  });
</script>

<style scoped lang="less">
  .shop {
 
    .icon {
      width: @fontDefaultSize*1.5;
      height: @fontDefaultSize*1.5;
    }
    .base {
      overflow: auto;
    }
    .tab {
      z-index: 1;
    }
  }
</style>
