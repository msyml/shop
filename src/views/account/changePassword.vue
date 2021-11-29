<template>
  <div class="change-password">
    <div class="simple-input" v-for="(item, index) in inputOptions" :key="item.placeholder">
      <SimpleIcon class="icon" icon="icon-lock"></SimpleIcon>
      <input
        class="input"
        :type="item.isShow ? '' : 'password'"
        v-model="item.value"
        :placeholder="item.placeholder"
      />
      <SimpleIcon
        @click="changeShow(index)"
        class="icon"
        :icon="item.isShow ? 'icon-dont-show' : 'icon-show'"
      ></SimpleIcon>
    </div>
    <div class="bottom-btn">
      <SimpleButton class="btn" @click="confirmChange">Confirm</SimpleButton>
      <SimpleButton type="border">Back To Sign In</SimpleButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, toRefs } from 'vue';
  import { SimpleIcon, SimpleButton } from '@/components';
  import { Notify } from 'vant';

  const state = reactive({
    inputOptions: [
      { value: '', isShow: false, placeholder: 'Old Password' },
      { value: '', isShow: false, placeholder: 'New Password' },
      { value: '', isShow: false, placeholder: 'Confirm Password' },
    ],
  });

  const confirmChange = () => {
    try {
      state.inputOptions.forEach((item) => {
        if (!item.value) {
          throw new Error(item.placeholder);
        }
      });
    } catch (e) {
      const message = `${e} Can't be empty`;
      Notify({
        type: 'danger',
        message,
      });
      return;
    }
    if (state.inputOptions[1].value !== state.inputOptions[2].value) {
      Notify({
        type: 'danger',
        message: 'The password does not match the confirmation password',
      });
      return;
    }
  };

  const changeShow = (index: number) => {
    state.inputOptions[index].isShow = !state.inputOptions[index].isShow;
  };

  const { inputOptions } = toRefs(state);
</script>

<style scoped lang="less">
  .change-password {
    padding: 0 @fontDefaultSize;
    .simple-input {
      .icon {
        width: @fontDefaultSize*1.5;
        height: @fontDefaultSize*1.5;
      }
    }
    .simple-input:nth-child(n + 1) {
      margin: @fontDefaultSize*3 0;
    }
    .simple-input:nth-child(n + 2) {
      margin: @fontDefaultSize*1 0;
    }
    .simple-input:nth-child(n + 3) {
      margin: 0 0;
    }
    .bottom-btn {
      margin: 0;
      .btn {
        margin-bottom: @fontDefaultSize;
      }
    }
  }
</style>
