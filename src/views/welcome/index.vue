<template>
  <div class="welcome">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-welcome" />
    </svg>
    <p class="title">Realax and shop</p>
    <p class="sub-title"
      >Shop online and get grocories delivered from stores to your home in as fast as 1 hour .</p
    >
    <MsymlButton
      v-for="button in options"
      :key="button.path"
      :type="button.type"
      @click="toPage(button.path)"
      >{{ button.label }}</MsymlButton
    >
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import MsymlButton from '@/components/MsymlButton.vue';
  import { useRouter } from 'vue-router';
  import { ButtonType } from './types';

  const router = useRouter();

  const options: ButtonType[] = [
    { type: 'default', label: 'Sign up', path: '/login' },
    { type: 'border', label: 'Sign in', path: '/register' },
  ];

  const toPage = (path: string) => {
    router.push(path);
  };

  onMounted(() => {});
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
      width: 68vw;
    }
    .title {
      font-weight: bold;
    }
    .sub-title {
      font-size: 4.4vw;
    }
  }
</style>
