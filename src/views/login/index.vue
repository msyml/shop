<template>
  <div>
    <SignBase class="login" :needBack="true" title="Sign In" icon="icon-a-login2">
      <template v-slot:content>
        <p class="tips">Enter your phone number and password to access your account</p>
        <div class="simple-input">
          <SimpleIcon class="flag" icon="icon-cn-flag"></SimpleIcon>
          <SimpleIcon class="down" icon="icon-down-key"></SimpleIcon>
          <input class="input" v-model="form.phone" placeholder="Phone Number" />
        </div>
        <div class="simple-input">
          <input
            class="input"
            :type="isShwoPass ? '' : 'password'"
            v-model="form.password"
            placeholder="Password"
          />
          <SimpleIcon
            @click="changeShow"
            class="show"
            :icon="isShwoPass ? 'icon-dont-show' : 'icon-show'"
          ></SimpleIcon>
        </div>
        <p class="forgote">Forgote Password</p>
      </template>
      <template v-slot:btns>
        <SimpleButton>Sign in</SimpleButton>
      </template>
      <template v-slot:tips
        ><p class="bottom-tips"
          >Don’t have an account? <span class="oper" @click="toRegister">Sign Up</span></p
        ></template
      >
    </SignBase>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, ref } from 'vue';
  import { SimpleButton, SimpleIcon } from '@/components';
  import SignBase from '@/layout/SignBase.vue';
  import { useRouter } from 'vue-router';
  import { LoginForm } from './types';

  const router = useRouter();
  const isShwoPass = ref(false);
  const form = reactive<LoginForm>({
    phone: '',
    password: '',
  });

  const changeShow = () => {
    isShwoPass.value = !isShwoPass.value;
  };
  const toRegister = () => {
    router.push('/register');
  };
  onMounted(() => {});
</script>

<style scoped lang="less">
  .login {
    font-size: @fontDefaultSize;

    .tips {
      color: #6d3805;
    }
    .simple-input ~ .simple-input {
      margin-top: 8px;
    }
    .simple-input {
      .flag {
        width: @fontDefaultSize*2;
        height: @fontDefaultSize*2;
      }
      .show {
        width: @fontDefaultSize*1.5;
        height: @fontDefaultSize*1.5;
      }
      .down {
        width: @fontDefaultSize*0.8;
        height: @fontDefaultSize*0.8;
        margin-left: @fontDefaultSize * 0.4;
      }
    }
    .forgote {
      margin: 16px 0;
      text-align: right;
      color: @mainColor;
    }
    .bottom-tips {
      color: @titleColor;
      .oper {
        color: @mainColor;
      }
    }
  }
</style>
