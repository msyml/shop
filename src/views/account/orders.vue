<template>
  <div>
    <van-config-provider :theme-vars="themeVars">
      <van-tabs v-model:active="active">
        <van-tab title="Ongoing">
          <OnGoing></OnGoing>
        </van-tab>
        <van-tab title="History">
          <History></History>
        </van-tab>
      </van-tabs>
    </van-config-provider>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import History from './components/orderHistory.vue';
  import OnGoing from './components/orderOnGoing.vue';

  const active = ref(0);
  const themeVars = {
    tabsBottomBarColor: '#ff5e00',
    tabTextColor: '#ff5e00',
    tabActiveTextColor: '#ff5e00',
  };

  onMounted(() => {});
</script>

<style scoped lang="less"></style>
