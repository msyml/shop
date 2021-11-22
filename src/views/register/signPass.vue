<template>
  <div>
    <SignBase class="sign-up" :needBack="true" icon="icon-sign-pass">
      <template v-slot:content>
        <p class="title">Enter the password</p>
        <p class="desc">For the security & safety please choose a password</p>
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
      </template>
      <template v-slot:btns>
        <SimpleButton @click="toNextPage">Next</SimpleButton>
      </template>
      <template v-slot:tips>&nbsp;</template>
    </SignBase>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import { SimpleIcon, SimpleButton } from '@/components';
  import SignBase from '@/layout/SignBase.vue';
  import { useRouter } from 'vue-router';
  import { CheckPassInput } from './types';
  import { Notify } from 'vant';

  const router = useRouter();
  const inputOptions = reactive<CheckPassInput[]>([
    { value: '', isShow: false, placeholder: 'Password' },
    { value: '', isShow: false, placeholder: 'Confirm Password' },
  ]);
  const changeShow = (index: number) => {
    inputOptions[index].isShow = !inputOptions[index].isShow;
  };
  const toNextPage = () => {
    if (!inputOptions[0].value || !inputOptions[1].value) {
      Notify({
        type: 'danger',
        message: "Password or Confirm Password Can't be empty",
      });
      return;
    }
    if (inputOptions[0].value !== inputOptions[1].value) {
      Notify({
        type: 'danger',
        message: 'The password does not match the confirmation password',
      });
      return;
    }
    router.push({
      path: '/signCode',
    });
  };
</script>

<style scoped lang="less">
  .sign-up {
    
    .simple-input ~ .simple-input {
      margin-top: 8px;
    }
    .simple-input {
      .icon {
        width: @fontDefaultSize * 1.5;
        height: @fontDefaultSize * 1.5;
      }
    }
    .title {
      color: @titleColor;
      font-weight: bold;
    }
    p ~ p {
      margin-top: 0;
    }
    .desc {
      color: @titleColor;
    }
  }
</style>
