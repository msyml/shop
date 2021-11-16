<template>
  <div class="simple-title">
    <span class="title">{{ props.title }}</span>
    <span class="all">See All</span>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    title: {
      type: String,
      default: 'Categories',
    },
  });
</script>

<style scoped lang="less">
  .simple-title {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    width: 100vw - @aroundMargin*3;
    .title {
      color: @tabBarUnActiveColor;
      font-size: @fontDefaultSize * 1.2;
    }
    .all {
      color: @mainColor;
    }
  }
</style>
