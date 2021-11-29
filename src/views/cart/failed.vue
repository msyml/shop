<template>
  <div class="fail">
    <SimpleIcon class="icon" icon="icon-order-failed"></SimpleIcon>
    <div class="desc">
      <div class="title">Oops! Order Failed!</div>
      <div class="sub-title">Something went terribly wrong</div>
    </div>
    <div class="bottom-btn">
      <SimpleButton>Try Again</SimpleButton>
      <SimpleButton type="border">Back Home</SimpleButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { SimpleIcon, SimpleButton } from '@/components';

  onMounted(() => {});
</script>

<style scoped lang="less">
  .fail {
    .icon {
      height: 180px;
      margin-bottom: @fontDefaultSize;
    }
    .desc {
      text-align: center;
      color: #6d3805;
      padding: 0 @fontDefaultSize;
      .title {
        font-weight: bold;
        margin-bottom: @fontDefaultSize;
      }
    }
  }
</style>
