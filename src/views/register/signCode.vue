<template>
  <SignBase class="code" icon="icon-sign-code" :needBack="true">
    <template v-slot:content>
      <p class="title">Enter Verification Code</p>
      <p class="desc">We have sent SMS to: 046 XXX XX XX</p>
      <div class="inputs">
        <input maxlength="1" class="line" />
        <input maxlength="1" class="line" />
        <input maxlength="1" class="line" />
        <input maxlength="1" class="line" />
        <input maxlength="1" class="line" />
      </div>
    </template>
    <template v-slot:btns>
      <SimpleButton @click="toNextPage">Next</SimpleButton>
    </template>
  </SignBase>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import SignBase from '@/layout/SignBase.vue';
  import { SimpleButton } from '@/components';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const toNextPage = () => {
    router.push({
      path: '/signCode',
    });
  };

  onMounted(() => {});
</script>

<style scoped lang="less">
  .code {
    p {
      color: @titleColor;
      margin-left: @aroundMargin;
      margin-right: @aroundMargin;
    }
    .title {
      font-weight: bold;
    }
    .inputs {
      margin-top: 5vh;
      display: flex;
      font-size: @fontDefaultSize * 1.5;
      justify-content: space-around;
      width: 100vw;
      .line {
        border: none;
        text-align: center;
        width: 12vw;
        border-bottom: 2px solid @titleColor;
      }
    }
  }
</style>
