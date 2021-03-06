<template>
  <div class="tab-bar">
    <div class="background-box"></div>
    <div
      v-for="(item, index) in options"
      :key="item.label"
      class="item"
      :class="{ 'item-active': index === activeIndex }"
      @click="handlerTabBarClick(item, index)"
    >
      <SimpleIcon class="icon" :icon="item.icon"></SimpleIcon>
      {{ item.label }}
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { TabBarItem } from './types';
  import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';
  import SimpleIcon from './SimpleIcon.vue';
  const options: TabBarItem[] = [
    { label: 'Shop', path: '/home', icon: 'icon-home' },
    { label: 'Explore', path: '/explore', icon: 'icon-explore' },
    { label: 'Cart', path: '/cart', icon: 'icon-cart' },
    { label: 'Favorite', path: '/favorite', icon: 'icon-heart' },
    { label: 'Account', path: '/account', icon: 'icon-user' },
  ];
  const router = useRouter();
  const route = useRoute();
  const activeIndex = ref<number>(0);

  onMounted(() => {
    checkRoute();
  });

  onBeforeRouteUpdate((to) => {
    try {
      options.forEach((item: TabBarItem, index: number) => {
        let reg = new RegExp(item.path, 'g');
        if (reg.test(to.path)) {
          activeIndex.value = index;
          throw new Error('matching!');
        }
      });
    } catch {}
  });

  const checkRoute = () => {
    try {
      options.forEach((item: TabBarItem, index: number) => {
        let reg = new RegExp(item.path, 'g');
        if (reg.test(route.path)) {
          activeIndex.value = index;
          throw new Error('matching!');
        }
      });
    } catch {}
  };

  const handlerTabBarClick = (item: TabBarItem, index: number) => {
    router.replace(item.path);
    activeIndex.value = index;
  };
</script>

<style scoped lang="less">
  .tab-bar {
    color: @tabBarUnActiveColor;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    position: absolute;
    width: 100vw;
    bottom: 0;

    .item {
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        width: @fontDefaultSize;
        height: @fontDefaultSize;
      }
    }
    .item-active {
      color: @mainColor;
    }
    .background-box {
      position: absolute;
      left: 0;
      z-index: 1;
      right: 0;
      top: -50%;
      bottom: -1.47%;
      border-radius: 16px 16px 0 0;
      border: 1px solid #e9e9e9;
      box-sizing: border-box;
      background-color: #fff;
      box-shadow: 0 -3px 13px rgba(105, 76, 76, 0.06);
    }
  }
</style>
