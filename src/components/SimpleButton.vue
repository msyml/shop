<template>
  <div class="my-button flex-row-center" :class="props.type">
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
  .my-button {
    border-radius: 96px;
    width: 375px - 2 * @aroundMargin;
    font-weight: bold;
    
    margin: 4px 0;
    border: 1px solid @mainColor;
    height: @fontDefaultSize * 3;
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
