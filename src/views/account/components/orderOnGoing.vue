<template>
  <div class="ongoing">
    <SimpleEmpty v-if="list.length === 0" icon="icon-order-ongoing">
      <template #desc>
        <p class="desc">
          There is n ongoing order right now.<br />
          You can order from home
        </p>
      </template>
    </SimpleEmpty>
    <div class="list" v-else></div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, ref, toRefs } from 'vue';
  import { SimpleEmpty } from '@/components';

  const state = reactive({
    list: [],
  });

  const { list } = toRefs(state);

  onMounted(() => {});
</script>

<style scoped lang="less">
  .ongoing {
    .desc {
      text-align: center;
      font-weight: 500;
      color: #804f1e;
    }
  }
</style>
