<template>
  <div class="edit-profile">
    <div class="simple-input">
      <input class="input" v-model="name" placeholder="Name" />
    </div>
    <div class="simple-input">
      <SimpleIcon class="flag" icon="icon-cn-flag"></SimpleIcon>
      <SimpleIcon class="down" icon="icon-down-key"></SimpleIcon>
      <input class="input" v-model="phone" placeholder="Phone Number" />
    </div>
    <SimpleButton class="bottom-btn" @click="submit">Update Profile</SimpleButton>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, ref, toRefs } from 'vue';
  import { SimpleButton, SimpleIcon } from '@/components';
  import { Notify } from 'vant';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const state = reactive({
    phone: '',
    name: '',
  });

  const submit = () => {
    const { name, phone } = state;
    if (!name) {
      return Notify({ message: 'Please enter your name' });
    }
    if (!phone) {
      return Notify({ message: 'Please enter your phone' });
    }
    const message = `Phone: ${phone},Name: ${name}`;
    Notify({
      message,
      type: 'success',
    });
    router.back();
  };

  const { phone, name } = toRefs(state);

  onMounted(() => {});
</script>

<style scoped lang="less">
  .edit-profile {
    padding: 0 @fontDefaultSize;
    padding-top: @fontDefaultSize * 4;
    .simple-input {
      margin-bottom: @fontDefaultSize*1.5;
      .flag {
        width: @fontDefaultSize*2;
        height: @fontDefaultSize*2;
      }
      .down {
        width: @fontDefaultSize;
        height: @fontDefaultSize;
        margin-left: @fontDefaultSize;
      }
    }
  }
</style>
