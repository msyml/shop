<template>
  <div class="sign-base">
    <div v-if="needBack" @click="back" class="back"><SimpleIcon icon="icon-back"></SimpleIcon></div>
    <span class="title">{{ props.title }}</span>
    <SimpleIcon class="main-figure" :icon="props.icon"></SimpleIcon>
    <!-- <img src="@/assets/images/signup.png" /> -->
    <div class="content">
      <slot name="content"></slot>
    </div>
    <slot name="btns"></slot>
    <slot name="tips"></slot>
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
  .sign-base {
    display: flex;
    flex-direction: column;
    align-items: center;
    .back {
      align-self: flex-start;
      margin-left: @aroundMargin;
      height: @fontDefaultSize * 1.5;

      width: @fontDefaultSize * 1.5;
    }
    .title {
      color: @mainColor;
      font-weight: bold;
      font-size: @fontDefaultSize * 1.5;
    }
    .main-figure {
      font-size: 375px - 2 * @aroundMargin;
      width: 375px - 2 * @aroundMargin;
      //   https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter-function/drop-shadow()
      // filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0,0,0,0.5));
    }
    .content {
      display: flex;
      flex-direction: column;
      margin: 0 @aroundMargin;
    }
  }
</style>
