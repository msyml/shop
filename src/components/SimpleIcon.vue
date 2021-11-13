<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="'#' + props.icon" />
  </svg>
</template>

<script lang="ts" setup>
  const props = defineProps({
    icon: {
      type: String,
    },
  });
</script>

<style scoped lang="less"></style>
