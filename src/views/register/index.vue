<template>
  <SignBase icon="icon-login">
    <template v-slot:content>
      <SimpleInput class="input" placeholder="Name Surname" />
      <SimpleInput class="input" placeholder="Phone Number" />
      <p class="desc">We need to verify you. We will send you a one time verification code.</p>
    </template>
    <template v-slot:tips
      ><p class="tips">Already have an account? <span class="oper" @click="toLogin">Login</span></p></template
    >
  </SignBase>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { SimpleInput } from '@/components';
  import SignBase from '@/layout/SignBase.vue';
  import {useRouter} from 'vue-router'
  const router = useRouter();
  const toLogin = () => {
      router.push('/login');
  }
  onMounted(() => {});
</script>

<style scoped lang="less">
  .input ~ .input {
    margin-top: 2vw;
  }
  P {
    color: @titleColor;
    .oper {
      color: @mainColor;
    }
  }
  .desc {
    font-size: @fontDefaultSize * 1.1;
    margin-left: 2.5vw;
    margin-right: 2.5vw;
  }
</style>
