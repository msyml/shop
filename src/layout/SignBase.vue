<template>
  <div class="sign-base">
    <div v-if="needBack" @click="back" class="back"><SimpleIcon icon="icon-back"></SimpleIcon></div>
    <span class="title">{{ props.title }}</span>
    <SimpleIcon class="main-figure" :icon="props.icon"></SimpleIcon>
    <!-- <img src="@/assets/images/signup.png" /> -->
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="btns">
      <slot name="btns"></slot>
      <slot name="tips"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { SimpleIcon } from '@/components';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const back = () => {
    router.back();
  };

  const props = defineProps({
    needBack: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'Sign Up',
    },
  });
</script>

<style scoped lang="less">
  @icon-size: 375px - 2 * @aroundMargin;
  .sign-base {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    .back {
      margin-top: @fontDefaultSize;
      align-self: flex-start;
      margin-left: @aroundMargin;
      height: @fontDefaultSize;
      width: @fontDefaultSize;
    }
    .title {
      color: @mainColor;
      font-weight: bold;
      font-size: @fontDefaultSize * 1.5;
    }
    .main-figure {
      // width: @icon-size;
      // height: @icon-size;
      flex: 3;
      // filter: drop-shadow(4px 4px 0px rgba(0,0,0,0.2));
    }
    .content {
      display: flex;
      flex: 3;
      flex-direction: column;
      margin: 0 @aroundMargin;
    }
    .btns {
      flex: 1;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
</style>
