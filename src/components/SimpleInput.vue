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
    align-items: center;
    height: @fontDefaultSize * 2;
    background-color: @inputBackgroundColor;
    padding: 6.4px 12.8px;
    input {
      flex: 1;
      font-size: @fontDefaultSize;
      background-color: @inputBackgroundColor;
      border: none;
      color: @inputFontColor;
      padding-left: 16px;
    }
    input::placeholder {
      color: @inputFontColor;
      border: none;
    }
  }
</style>
