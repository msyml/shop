<template>
  <div class="address">
    <div class="item" v-for="item in list" :key="item.id" @click="toPage(item.id)">
      <van-image :src="item.image" />
      <div class="info">
        <p class="title">{{ item.title }}</p>
        <p class="address">{{ item.city }}{{ item.address }}</p>
      </div>
      <SimpleIcon class="icon" icon="icon-right" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, ref, toRefs } from 'vue';
  import { Address } from './types';
  import { SimpleIcon } from '@/components';
  import { getAddressList } from '@/api';
  import { useRouter } from 'vue-router';

  const router = useRouter();

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
    .item {
      display: flex;
      align-items: center;
      padding: 0 @fontDefaultSize;
      color: #6d3805;
      border-bottom: 1px solid rgba(128, 79, 30, 0.1);
      .info {
        flex: 1;
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
