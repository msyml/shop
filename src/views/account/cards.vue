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
    <div class="list" v-else>
      <van-swipe-cell v-for="(item, index) in list" :key="item.id">
        <div class="item">
          <div class="image">
            <van-image lazy-load width="100%" height="100%" class="img" round :src="item.image" />
          </div>
          <div class="info">
            <p class="name">{{ item.name }}</p>
            <p class="number">{{ item.number }}</p>
          </div>
          <SimpleIcon v-if="item.isCheck" class="icon" icon="icon-right"></SimpleIcon>
          <SimpleIcon v-else class="icon-check" icon="icon-check"></SimpleIcon>
        </div>
        <template #right>
          <van-button
            class="delete"
            @click="removeCards(index)"
            color="#A42B32"
            icon="delete-o"
            type="primary"
          />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, toRefs } from 'vue';
  import { SimpleEmpty, SimpleIcon } from '@/components';
  import { getCardList } from '@/api';

  const state = reactive({
    list: [] as Card[],
  });

  onMounted(() => {
    getList();
  });

  const getList = () => {
    const para = {
      pageSize: 3,
    };
    getCardList(para).then((res: Result<PageResult<Card>>) => {
      state.list = res.result.list.map((item) => {
        item.number = calcNumber(item.number);
        return item;
      });
    });
  };

  const calcNumber = (cardNumber: number | string) => {
    let num = cardNumber.toString();
    num = num.substring(0, 4) + ' **** **** ' + num.substring(11, 15);
    return num;
  };

  const removeCards = (index: number) => {
    state.list.splice(index, 1);
  };

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
    .list {
      .item {
        display: flex;
        padding: 0 @fontDefaultSize;
        border-bottom: 1px solid rgba(128, 79, 30, 0.14);
        align-items: center;
        .image {
          width: @fontDefaultSize*3;
          height: @fontDefaultSize*3;
        }
        .info {
          padding-left: @fontDefaultSize * 0.5;
          color: #6d3805;
          flex: 1;
          .name {
            font-weight: bold;
          }
        }
        .icon {
          color: #6d3805;
          width: @fontDefaultSize;
          height: @fontDefaultSize;
        }
        .icon-check {
          color: #58a919;
          width: @fontDefaultSize;
          height: @fontDefaultSize;
        }
      }
      .delete {
        height: 100%;
      }
    }
  }
</style>
