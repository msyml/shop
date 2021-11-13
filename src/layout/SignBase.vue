<template>
  <div class="sign-base">
    <div class="back"><SimpleIcon icon="icon-back"></SimpleIcon></div>
    <span class="title">{{ props.title }}</span>
    <SimpleIcon class="main-figure" :icon="props.icon"></SimpleIcon>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <SimpleButton>{{ props.btnText }}</SimpleButton>
    <slot name="tips"></slot>
  </div>
</template>

<script lang="ts" setup>
  import { SimpleButton, SimpleIcon } from '@/components';
  const props = defineProps({
    btnText: {
      type: String,
      default: 'Next',
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
  .sign-base {
    display: flex;
    flex-direction: column;
    align-items: center;
    .back {
      align-self: flex-start;
      margin-left: @aroundMargin;
    }
    .title {
      color: @mainColor;
      font-weight: bold;
      font-size: @fontDefaultSize * 1.5;
    }
    .main-figure {
      margin-top: 4vh;
      font-size: 50vh;
      max-width: 96vw;
    //   https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter-function/drop-shadow()
      filter: drop-shadow(0px 4px 4px #000000CC);
    }
  }
</style>
