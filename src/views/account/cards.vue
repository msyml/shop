<template>
  <div class="cards">
    <SimpleEmpty v-if="list.length === 0" icon="icon-no-card">
      <template v-slot:desc>
        <div class="desc">
          <p class="title">No Saved Card</p>
          <p>You can save your card info to make purchase easier, faster.</p>
        </div>
      </template>
    </SimpleEmpty>
    <div class="list" v-else></div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, toRefs } from 'vue';
  import { SimpleEmpty, SimpleButton } from '@/components';

  const state = reactive({
    list: [],
  });

  const { list } = toRefs(state);
</script>

<style scoped lang="less">
  .cards {
    .desc {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #6d3805;
      .title {
        font-weight: bold;
      }
      p {
        margin: @fontDefaultSize*0.5 0;
        padding: 0 @fontDefaultSize*4;
        text-align: center;
      }
    }
  }
</style>
