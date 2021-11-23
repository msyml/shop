<template>
  <div>
    <SimpleEmpty v-if="list.length === 0" icon="icon-favorite-empty">
      <template v-slot:desc> desc </template>
      <template v-slot:btns> <SimpleButton>Start shoping</SimpleButton> </template>
    </SimpleEmpty>
    <div class="favorite" v-else></div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, toRefs } from 'vue';
  import { SimpleEmpty, SimpleButton } from '@/components';

  const state = reactive({
    list: [],
  });

  const { list } = toRefs(state);

  onMounted(() => {});
</script>

<style scoped lang="less"></style>
