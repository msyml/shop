<template>
  <div>
    <SimpleIcon :icon="icon"> </SimpleIcon>
    <div class="desc">
      <slot name="desc"></slot>
    </div>
    <div class="btns">
      <slot name="btns"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import SimpleIcon from './SimpleIcon.vue';

  const props = defineProps({
    icon: {
      type: String,
      required: true,
    },
  });
</script>

<style scoped lang="less"></style>
