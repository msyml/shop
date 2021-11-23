<template>
  <div class="empty">
    <SimpleIcon class="icon" :icon="icon"> </SimpleIcon>
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

<style scoped lang="less">
  .empty {
    position: relative;
    height: calc(100vh - 108px);
    overflow: hidden;
    .icon {
      max-height: 50vh;
    }
    .btns {
      position: absolute;
      bottom: @fontDefaultSize * 0.5;
      left: @fontDefaultSize;
      right: @fontDefaultSize;
      display: flex;
      flex-direction: column-reverse;
    }
  }
</style>
