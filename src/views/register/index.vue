<template>
  <div>
    <SignBase class="sign-up" :needBack="true" icon="icon-sign-up">
      <template v-slot:content>
        <!-- <SimpleInput class="input" v-model="name" placeholder="Name Surname" />
      <SimpleInput class="input" v-model="phone" placeholder="Phone Number">
        <template v-slot:prefix>
          <SimpleIcon class="flag" icon="icon-cn-flag"></SimpleIcon>
          <SimpleIcon class="down" icon="icon-down-key"></SimpleIcon>
        </template>
      </SimpleInput> -->
        <div class="simple-input">
          <input class="input" v-model="name" placeholder="Name Surname" />
        </div>
        <div class="simple-input">
          <SimpleIcon class="flag" icon="icon-cn-flag"></SimpleIcon>
          <SimpleIcon class="down" icon="icon-down-key"></SimpleIcon>
          <input class="input" v-model="phone" placeholder="Phone Number" />
        </div>
        <p class="desc">We need to verify you. We will send you a one time verification code.</p>
      </template>
      <template v-slot:btns>
        <SimpleButton @click="toNextPage">Next</SimpleButton>
      </template>
      <template v-slot:tips
        ><p class="tips"
          >Already have an account? <span class="oper" @click="toLogin">Login</span></p
        ></template
      >
    </SignBase>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { SimpleIcon, SimpleButton } from '@/components';
  import SignBase from '@/layout/SignBase.vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const name = ref('');
  const phone = ref('');
  const toLogin = () => {
    router.push('/login');
  };
  const toNextPage = () => {
    console.log('toNextPage');
    const userInfo = {
      name: name.value,
      phone: phone.value,
    };
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
    router.push({
      path: '/signPass',
    });
  };
</script>

<style scoped lang="less">
  .sign-up {
    .simple-input ~ .simple-input {
      margin-top: 8px;
    }
    .flag {
      width: @fontDefaultSize*2;
      height: @fontDefaultSize*2;
    }
    .down {
      width: @fontDefaultSize*0.8;
      height: @fontDefaultSize*0.8;
      margin-left: @fontDefaultSize * 0.4;
    }
    P {
      color: @titleColor;
      .oper {
        color: @mainColor;
      }
    }
    .desc {
      font-size: @fontDefaultSize * 1.1;
    }
  }
</style>
