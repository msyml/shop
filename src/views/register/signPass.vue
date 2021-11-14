<template>
  <SignBase class="sign-up" :needBack="true" icon="icon-sign-pass">
    <template v-slot:content>
      <p class="title">Enter the password</p>
      <p class="desc">For the security & safety please choose a password</p>
      <div class="simple-input">
        <SimpleIcon icon="icon-lock"></SimpleIcon>
        <input class="input" v-model="pass" placeholder="Password" />
        <SimpleIcon icon="icon-show"></SimpleIcon>
      </div>
      <div class="simple-input">
        <SimpleIcon icon="icon-lock"></SimpleIcon>
        <input class="input" v-model="confirmPass" placeholder="Confirm Password" />
        <SimpleIcon icon="icon-show"></SimpleIcon>
      </div>
    </template>
    <template v-slot:btns>
      <SimpleButton @click="toNextPage">Next</SimpleButton>
    </template>
  </SignBase>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { SimpleIcon, SimpleButton } from '@/components';
  import SignBase from '@/layout/SignBase.vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const pass = ref('');
  const confirmPass = ref('');
  const toNextPage = () => {
    router.push({
      path: '/signCode',
    });
  };
</script>

<style scoped lang="less">
  .sign-up {
    .simple-input ~ .simple-input {
      margin-top: 2vw;
    }
    .title {
      color: @titleColor;
      font-weight: bold;
    }
    .desc {
      color: @titleColor;
    }
  }
</style>
