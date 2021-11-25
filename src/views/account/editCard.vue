<template>
  <div class="edit-card">
    <p class="title"> Card number </p>
    <div class="simple-input">
      <input class="input" v-model="cardNumber" placeholder="xxxx xxxx xxxx xxxx" />
    </div>
    <p class="title"> Expiry Date </p>
    <div class="simple-input">
      <input class="input" v-model="expiryDate" placeholder="MM/YY" />
    </div>
    <p class="title"> CCV </p>
    <div class="simple-input">
      <input class="input" v-model="ccv" placeholder="****" />
    </div>
    <SimpleButton class="bottom-btn" @click="submit">Add Card</SimpleButton>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, ref, toRefs } from 'vue';
  import { SimpleButton } from '@/components';

  const state = reactive({
    cardNumber: '',
    expiryDate: '',
    ccv: '',
  });

  const submit = () => {
    console.log(state.cardNumber, state.expiryDate, state.ccv);
  };

  const { cardNumber, expiryDate, ccv } = toRefs(state);

  onMounted(() => {});
</script>

<style scoped lang="less">
  .edit-card {
    padding: 0 @fontDefaultSize;
    padding-top: @fontDefaultSize * 4;
    .title {
      color: #6d3805;
      font-weight: bold;
      margin: 0;
    }
    .simple-input {
      margin-bottom: @fontDefaultSize * 2;
    }
  }
</style>
