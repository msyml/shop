<template>
  <div class="account">
    <div @click="toPage(item.path)" class="item" v-for="item in options" :key="item.path">
      <SimpleIcon class="icon" :icon="item.icon"></SimpleIcon>
      <span class="title">{{ item.label }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Option } from './types';
  import { SimpleIcon } from '@/components';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const options: Option[] = [
    { icon: 'icon-user', label: 'Profile', path: 'accountProfile' },
    { icon: 'icon-orders', label: 'Orders', path: 'accountOrders' },
    { icon: 'icon-address', label: 'Address', path: 'accountAddress' },
    { icon: 'icon-payment', label: 'Payment', path: 'accountPayment' },
  ];

  const toPage = (path: string) => {
    router.push(path);
  };
</script>

<style scoped lang="less">
  .account {
    .item {
      display: flex;
      margin: @fontDefaultSize*1.5;
      color: #6d3805;
      align-items: center;
      .icon {
        width: @fontDefaultSize * 2;
        height: @fontDefaultSize * 2;
        color: @mainColor;
      }
      .title {
        font-weight: bold;
        padding-left: @fontDefaultSize;
      }
    }
  }
</style>
