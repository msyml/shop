<template>
  <div>
    <SignBase class="code" icon="icon-sign-code" :needBack="true">
      <template v-slot:content>
        <p class="title">Enter Verification Code</p>
        <p class="desc">We have sent SMS to: 046 XXX XX XX</p>
        <div class="inputs">
          <input
            :id="'input' + index"
            v-for="(item, index) in inputOptions"
            :key="index"
            maxlength="1"
            class="line"
            :ref="
              (el) => {
                if (el) inputs[index] = el;
              }
            "
            @keyup="handlerInputKeyUp"
            v-model="item.value"
          />
        </div>
      </template>
      <template v-slot:btns>
        <SimpleButton @click="toNextPage">Next</SimpleButton>
      </template>
      <template v-slot:tips> </template>
    </SignBase>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, onBeforeUpdate, nextTick } from 'vue';
  import SignBase from '@/layout/SignBase.vue';
  import { SimpleButton } from '@/components';
  import { useRouter } from 'vue-router';
  import { CodeInputOption } from './types';
  import { Notify } from 'vant';

  const router = useRouter();

  const inputOptions = reactive<CodeInputOption[]>([
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
  ]);
  const inputs = reactive<any>([]);

  onBeforeUpdate(() => {
    inputs.value = [];
  });

  const handlerInputKeyUp = (e: KeyboardEvent) => {
    const id = (e.target as Element).id;
    const index = Number(id[id.length - 1]);
    let action = 'add';
    if (e.key === 'Escape' || e.key === 'Backspace') {
      action = 'sub';
    }
    nextTick(() => {
      if (action === 'add') {
        if (index + 1 >= inputOptions.length) {
          return;
        }
        inputs[index + 1].focus();
      } else {
        if (index === 0) {
          return;
        }
        inputs[index - 1].focus();
      }
    });
  };

  const toNextPage = () => {
    // 判断输入框是否有空值
    try {
      inputOptions.forEach((item) => {
        if (!item.value) {
          throw new Error('null');
        }
      });
    } catch {
      Notify({
        type: 'danger',
        message: 'Code is not null!',
      });
      return;
    }
    router.push({
      path: '/login',
    });
  };

  onMounted(() => {});
</script>

<style scoped lang="less">
  .code {
    font-size: 16px;
    p {
      color: @titleColor;
      margin-left: @aroundMargin;
      margin-right: @aroundMargin;
    }
    .title {
      font-weight: bold;
    }
    .inputs {
      display: flex;
      font-size: @fontDefaultSize * 1.5;
      justify-content: space-around;
      width: 375px;
      .line {
        border: none;
        text-align: center;
        width: 48px;
        border-bottom: 2px solid @titleColor;
      }
    }
  }
</style>
