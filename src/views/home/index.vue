<template>
    <div>
        home
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { getProductList } from '@/api';

defineProps({
  msg: String,
});

onMounted(() => {
  getProductList({}).then((res) => {
    console.log(res);
  });
});
</script>

<style scoped lang="less">
div {
    color: @mainColor;
}
</style>
