<template>
  <div class="history">
    <div class="item" v-for="item in list" :key="item.id">
      <SimpleIcon class="icon" icon="icon-orders" />
      <div class="infor">
        <div class="title">{{ item.name }} #{{ item.number }}</div>
        <div class="type">
          <div class="success" v-if="item.type === 1">Delivered</div>
          <div class="cancel" v-else-if="item.type === 2">Cancelled</div>
        </div>
        <div class="time">{{ item.orderTime }}</div>
      </div>
      <div class="count"> ${{ item.count }} </div>
    </div></div
  >
</template>

<script lang="ts" setup>
  import { onMounted, reactive, toRefs } from 'vue';
  import { getOrderList } from '@/api';
  import { Order } from '../types';
  import { SimpleIcon } from '@/components';

  const state = reactive({
    list: [] as Order[],
  });

  const { list } = toRefs(state);

  onMounted(() => {
    getList();
  });

  const getList = () => {
    const para = {
      pageSize: 3,
    };
    getOrderList(para).then((res: Result<PageResult<Order>>) => {
      state.list = res.result.list;
    });
  };
</script>

<style scoped lang="less">
  .history {
    // padding: 0 @fontDefaultSize;
    .item {
      display: flex;
      border-bottom: 1px solid rgba(109, 56, 5, 0.06);
      align-items: center;
      padding: @fontDefaultSize;
      .icon {
        width: @fontDefaultSize*3;
        height: @fontDefaultSize*3;
      }
      .infor {
        padding-left: @fontDefaultSize;
        flex: 1;
        color: #804f1e;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        .title {
          font-weight: bold;
          margin-bottom: @fontDefaultSize * 0.5;
        }
        .type {
          margin-bottom: @fontDefaultSize * 0.2;
          .success {
            color: #5ec401;
          }
          .cancel {
            color: #f2110d;
          }
        }
      }
      .count {
        color: #f37a20;
        font-weight: bold;
      }
    }
  }
</style>
