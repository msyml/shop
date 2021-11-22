<template>
  <div class="simple-title">
    <SimpleIcon v-if="isNeedBack" @click="back" class="left" icon="icon-back"></SimpleIcon>
    <div v-else class="left"></div>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <SimpleIcon class="right" v-if="props.isNeedAdd" icon="icon-add" @click="toAdd"></SimpleIcon>
    <div v-else class="right"></div>
  </div>
</template>

<script lang="ts" setup>
  import { SimpleIcon } from './index';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const props = defineProps({
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

  const back = () => {
    router.back();
  };
</script>

<style scoped lang="less">
  .simple-title {
    color: @mainColor;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    margin-bottom: 4px;
    height: @fontDefaultSize * 2.5;
    .left,
    .right {
      padding: 0 8px;
      width: 16px;
    }
    .title {
      text-align: center;
      font-size: @fontDefaultSize* 1.5;
      align-self: flex-end;
    }
    .auto {
      align-self: auto;
    }
  }
</style>
