<template>
  <div class="simple-input">
    <SimpleIcon class="icon" icon="icon-search" />
    <input :placeholder="props.placeholder" />
  </div>
</template>

<script lang="ts" setup>
  import { SimpleIcon } from './index';
  const props = defineProps({
    placeholder: {
      type: String,
      default: 'search',
    },
  });
</script>

<style scoped lang="less">
  .simple-input {
    border-radius: @inputBorderRadius;
    position: relative;
    height: @fontDefaultSize * 2;
    background-color: @inputBackgroundColor;
    font-size: @fontDefaultSize;
    margin: 0 @fontDefaultSize;
    input {
      font-size: @fontDefaultSize;
      background-color: @inputBackgroundColor;
      border: none;
      color: @inputFontColor;
      padding-left: @fontDefaultSize * 2;
    }
    .icon {
      position: absolute;
      width: @fontDefaultSize;
      height: @fontDefaultSize;
      left: @fontDefaultSize;
    }
    input::placeholder {
      color: @inputFontColor;
      border: none;
    }
  }
</style>
