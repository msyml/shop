<template>
  <SignBase class="sign-up" :needBack="true" icon="icon-sign-pass">
    <template v-slot:content>
      <p class="title">Enter the password</p>
      <p class="desc">For the security & safety please choose a password</p>
      <!-- <div class="simple-input">
        <SimpleIcon class="icon" icon="icon-lock"></SimpleIcon>
        <input class="input" v-model="pass" placeholder="Password" />
        <SimpleIcon class="icon" icon="icon-show"></SimpleIcon>
      </div>
      <div class="simple-input">
        <SimpleIcon class="icon" icon="icon-lock"></SimpleIcon>
        <input class="input" v-model="confirmPass" placeholder="Confirm Password" />
        <SimpleIcon class="icon" icon="icon-show"></SimpleIcon>
      </div> -->

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
  </SignBase>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
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
    // try {
    //   inputOptions.reduce((acc?: CheckPassInput, cur: CheckPassInput) =>  {
    //     if (!cur.value || !acc.value) {
    //       Notify({
    //         type: 'danger',
    //         message: `Password or Confirm Password Can't be empty`,
    //       });
    //       throw new Error('');
    //     }
    //   });
    // } catch (e: any) {
    //   return;
    // }
    router.push({
      path: '/signCode',
    });
  };
</script>

<style scoped lang="less">
  .sign-up {
    .simple-input ~ .simple-input {
      margin-top: 2vw;
    }
    .simple-input {
      .icon {
        font-size: @fontDefaultSize*1.5;
      }
    }
    .title {
      color: @titleColor;
      font-weight: bold;
    }
    .desc {
      color: @titleColor;
    }
  }
</style>
