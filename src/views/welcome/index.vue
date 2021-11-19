<template>
  <div class="welcome">
    <SimpleIcon icon="icon-welcome"></SimpleIcon>
    <p class="title">Realax and shop</p>
    <p class="sub-title"
      >Shop online and get grocories delivered from stores to your home in as fast as 1 hour .</p
    >
    <SimpleButton
      v-for="button in options"
      :key="button.path"
      :type="button.type"
      @click="toPage(button.path)"
      >{{ button.label }}</SimpleButton
    >
  </div>
</template>

<script lang="ts" setup>
  import { SimpleButton, SimpleIcon } from '@/components';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const options: ButtonType[] = [
    { type: 'default', label: 'Sign up', path: '/register' },
    { type: 'border', label: 'Sign in', path: '/login' },
  ];

  const toPage = (path?: string) => {
    router.push(path as string);
  };
</script>

<style scoped lang="less">
  .welcome {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: @fontDefaultSize * 1.5;
    .icon {
      width: 360px;
      height: 360px;
    }
    p {
      text-align: center;
      color: @titleColor;
      font-size: @fontDefaultSize * 1.1;
      width: 272px;
    }
    .title {
      margin-top: 32px;
      margin-bottom: 8px;
      font-weight: bold;
      font-size: @fontDefaultSize * 1.3;
    }
  }
</style>
