<template>
  <div class="simple-input">
    <slot name="prefix"></slot>
    <input :placeholder="props.placeholder" />
    <slot name="suffix"></slot>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    placeholder: {
      type: String,
      default: 'placeholder',
    },
  });
</script>

<style scoped lang="less">
  .simple-input {
    display: flex;
    border-radius: @inputBorderRadius;
    height: @fontDefaultSize * 3;
    background-color: @inputBackgroundColor;
    input {
      flex: 1;
      border-radius: @inputBorderRadius;
      font-size: @fontDefaultSize;
      background-color: @inputBackgroundColor;
      border: none;
      color: @inputFontColor;
      padding-left: 4vw;
    }
    input::placeholder {
      color: @inputFontColor;
    }
  }
</style>
