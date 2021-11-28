<template>
  <div class="success">
    <SimpleIcon class="icon" icon="icon-order-accepted"></SimpleIcon>
    <div class="desc">
      <div class="title">Your Order Has Been Accepted</div>
      <div class="sub-title">We’ve accepted your order, and we’re getting it ready.</div>
    </div>
    <div class="bottom-btn">
      <SimpleButton>Track Order</SimpleButton>
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
  .success {
    .icon {
      height: 320px;
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
