<template>
  <svg class="icon" :class="{ 'icon-shadow': props.shadow }" aria-hidden="true">
    <use :xlink:href="'#' + props.icon" />
  </svg>
</template>

<script lang="ts" setup>
  const props = defineProps({
    icon: {
      type: String,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
  });
</script>

<style scoped lang="less">
  .icon {
    width: 100%;
    height: 100%;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .icon-shadow {
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
  }
</style>
