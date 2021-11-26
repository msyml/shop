<template>
  <div class="edit-address">
    <div class="simple-input">
      <input class="input" v-model="form.title" placeholder="Address Title" />
    </div>
    <div class="simple-input">
      <input class="input" v-model="form.name" placeholder="Name Surname" />
    </div>
    <div class="simple-input">
      <input class="input" v-model="form.city" placeholder="City" />
      <SimpleIcon class="icon" icon="icon-down"></SimpleIcon>
    </div>
    <div class="simple-input">
      <input class="input" v-model="form.address" placeholder="Address" />
    </div>
    <SimpleButton class="bottom-btn" @click="submit">{{ btnDesc }}</SimpleButton>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, toRefs } from 'vue';
  import { SimpleButton, SimpleIcon } from '@/components';
  import { useRouter, useRoute } from 'vue-router';
  import { getAddressDetail } from '@/api';
  import { Address } from './types';
  import { useStore } from 'vuex';
  import { Notify } from 'vant';

  const router = useRouter();
  const route = useRoute();
  const store = useStore();

  const state = reactive({
    form: {} as Address,
    btnDesc: 'Add',
  });

  const { form, btnDesc } = toRefs(state);

  onMounted(() => {
    if (route.query.id) {
      state.btnDesc = 'Update Address';
      store.dispatch('asyncChangeTitle', 'Edit Address');
      getDetail();
    } else {
      store.dispatch('asyncChangeTitle', 'New Address');
    }
  });

  const getDetail = () => {
    const para = {
      id: route.query.id,
    };
    getAddressDetail(para).then((res: Result<Address>) => {
      state.form = { ...res.result };
    });
  };

  const submit = () => {
    try {
      let i = 0;
      Object.keys(state.form).forEach((key) => {
        if (!state.form[key]) {
          throw new Error(key);
        }
        i++;
      });
      if (i <= 1) {
        throw new Error('form');
      }
    } catch (e) {
      let message = `${e} is null`;
      Notify({
        message,
      });
      return;
    }
    console.log({ ...state.form });
    router.back();
  };
</script>

<style scoped lang="less">
  .edit-address {
    padding: 0 @fontDefaultSize;
    padding-top: @fontDefaultSize * 4;
    .simple-input {
      margin-bottom: @fontDefaultSize*1.5;
      .icon {
        width: @fontDefaultSize;
        height: @fontDefaultSize;
        margin-right: @fontDefaultSize;
        color: #828282;
      }
    }
  }
</style>
