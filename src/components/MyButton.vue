<template>
  <div class="my-button" :class="props.type">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';

  const props = defineProps({
    type: {
      type: String,
      default: 'default',
    },
  });

  onMounted(() => {});
</script>

<style scoped lang="less">
@button-height: 6vh;
  .my-button {
    text-align: center;
    border-radius: 6vw;
    width: 92vw;
    height: @button-height;
    line-height: @button-height;
    font-weight: bold;
    margin: 1vh 0;
    border: 1px solid @mainColor;
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
