<template>
  <div class="welcome">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-welcome" />
    </svg>
    <p class="title">Realax and shop</p>
    <p class="sub-title">Shop online and get grocories delivered from stores to your home in as fast as 1 hour .</p>
    <MyButton>Sign up</MyButton>
    <MyButton type="border">Sign in</MyButton>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import MyButton from '@/components/MyButton.vue'

  onMounted(() => {});
</script>

<style scoped lang="less">
.welcome{
  display: flex;
  align-items: center;
  flex-direction: column;
  .icon{
    margin-top: 4vh;
    font-size:50vh;
  }
  p{
    text-align: center;
    color: @titleColor;
    width: 68vw;
  }
  .title{
    font-weight: bold;
  }
  .sub-title{
    font-size: 4.4vw;
  }
}
</style>
