<template>
  <div class="simple-title">
    <SimpleIcon class="left" icon="icon-back"></SimpleIcon>
    <!-- <span class="title" :class="titlePosition">{{ props.title }}</span> -->
    <div class="title">
      <slot name="title"></slot>
    </div>
    <SimpleIcon class="right" v-if="props.isNeedAdd" icon="icon-add" @click="toAdd"></SimpleIcon>
    <div class="right"></div>
  </div>
</template>

<script lang="ts" setup>
  import { SimpleIcon } from './index';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const props = defineProps({
    title: {
      type: String,
      default: 'Categories',
    },
    isNeedBack: {
      type: Boolean,
      default: true,
    },
    isNeedAdd: {
      type: Boolean,
      default: false,
    },
    addPath: {
      type: String,
    },
    titlePosition: {
      type: String,
    },
  });
  const toAdd = () => {
    if (props.isNeedAdd) {
      router.push(props.addPath as string);
    }
  };
</script>

<style scoped lang="less">
  .simple-title {
    color: @mainColor;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    margin-top: 2vh;
    margin-bottom: 1vh;
    height: 12vw;
    .left,
    .right {
      flex: 1;
    }
    .title {
      flex: 6;
      text-align: center;
      font-size: @fontDefaultSize* 1.5;
      align-self: flex-end;
    }
    .auto {
      align-self: auto;
    }
  }
</style>
