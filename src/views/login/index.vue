<template>
  <SignBase icon="icon-login">
    <template v-slot:content>
      <input placeholder="Name Surname" />
      <input placeholder="Phone Number" />
      <p>We need to verify you. We will send you a one time verification code.</p>
    </template>
    <template v-slot:tips>Already have an account? Login</template>
  </SignBase>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import SignBase from '@/layout/SignBase.vue';
  onMounted(() => {});
</script>

<style scoped lang="less"></style>
