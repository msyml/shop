<template>
  <div class="address">
    <div class="item" v-for="item in list" :key="item.id" @click="changeAddress(item.id)">
      <div class="image">
        <van-image lazy-load round width="100%" height="100%" :src="item.image" />
      </div>
      <div class="info">
        <p class="title">{{ item.title }}</p>
        <p class="address">{{ item.city }}{{ item.address }}</p>
      </div>
      <SimpleIcon class="icon" @click.stop="toPage(item.id)" icon="icon-right" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, ref, toRefs } from 'vue';
  import { Address } from './types';
  import { SimpleIcon } from '@/components';
  import { getAddressList } from '@/api';
  import { useRouter, useRoute } from 'vue-router';

  const router = useRouter();
  const route = useRoute();

  const state = reactive({
    list: [] as Address[],
  });

  onMounted(() => {
    getList();
  });

  const toPage = (id: string) => {
    router.push({
      path: '/accountEditAddress',
      query: {
        id,
      },
    });
  };

  const changeAddress = (id: string) => {
    if (route.query.isCheck === '1') {
      router.replace({
        path: '/cartPayment',
        query: {
          id,
        },
      });
    }
  };

  const getList = () => {
    const para = {
      pageSize: 2,
    };
    getAddressList(para).then((res: Result<PageResult<Address>>) => {
      state.list = res.result.list;
    });
  };

  const { list } = toRefs(state);
</script>

<style scoped lang="less">
  .address {
    height: calc(100vh - 108px);
    overflow: auto;
    .item {
      display: flex;
      align-items: center;
      padding: 0 @fontDefaultSize;
      height: @fontDefaultSize*5;
      color: #6d3805;
      border-bottom: 1px solid rgba(128, 79, 30, 0.1);
      .image {
        width: @fontDefaultSize*4;
        height: @fontDefaultSize*4;
      }
      .info {
        flex: 1;
        height: @fontDefaultSize*5;
        padding-left: @fontDefaultSize * 0.5;
        .name {
          font-weight: bold;
        }
        .address {
          color: rgba(109, 56, 5, 0.8);
        }
      }
      .icon {
        width: @fontDefaultSize;
        height: @fontDefaultSize;
      }
    }
  }
</style>
