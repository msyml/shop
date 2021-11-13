<template>
  <div class="my-button" :class="props.type">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    type: {
      type: String,
      default: 'default',
    },
  });
</script>

<style scoped lang="less">
  @button-height: 6vh;
  .my-button {
    // 水平竖直居中
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6vw;
    width: 100vw - 2 * @aroundMargin;
    font-weight: bold;
    margin: 1vh 0;
    border: 1px solid @mainColor;
    height: @button-height;
    min-height: @fontDefaultSize * 1.5;
  }
  .default {
    color: white;
    background-color: @mainColor;
  }
  .border {
    color: @mainColor;
    background-color: #fff;
  }
</style>
