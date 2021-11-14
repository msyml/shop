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
    .icon {
      margin-top: 4vh;
      font-size: 50vh;
      max-width: 96vw;
    }
    p {
      text-align: center;
      color: @titleColor;
      font-size: @fontDefaultSize * 1.1;
      width: 68vw;
    }
    .title {
      margin-top: 8vw;
      margin-bottom: 2vw;
      font-weight: bold;
      font-size: @fontDefaultSize * 1.3;
    }
  }
</style>
