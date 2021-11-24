<template>
  <div class="favorite">
    <SimpleEmpty v-if="list.length === 0" icon="icon-favorite-empty">
      <template v-slot:desc>
        <div class="desc">
          <p class="title">Your heart is empty</p>
          <p>Start fall in love with some good goods </p>
        </div>
      </template>
      <template v-slot:btns> <SimpleButton>Start shoping</SimpleButton> </template>
    </SimpleEmpty>
    <div class="list" v-else>
      <van-swipe-cell v-for="(item, index) in list" :key="item.id">
        <div class="item">
          <div class="image">
            <van-image lazy-load class="img" round :src="item.image" />
          </div>
          <div class="info">
            <div class="name">
              {{ item.name }}
            </div>
            <div class="bottom">
              <div class="oper">
                <SimpleIcon class="icon" icon="icon-cart"></SimpleIcon>Add to cart
              </div>
              <div class="price"
                >${{ item.price }}<span class="unit">{{ item.unit }}</span></div
              >
            </div>
          </div>
        </div>
        <template #right>
          <van-button
            class="delete"
            @click="removeFavorite(index)"
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
  import { SimpleEmpty, SimpleButton, SimpleIcon } from '@/components';
  import { getProductList } from '@/api';

  const state = reactive({
    list: [] as Product[],
  });

  const { list } = toRefs(state);

  const productList = () => {
    const para = {
      pageSize: 3,
    };
    getProductList(para).then((res: Result<PageResult<Product>>) => {
      state.list = res.result.list;
    });
  };

  const removeFavorite = (index: number) => {
    state.list.splice(index, 1);
  };

  onMounted(() => {
    productList();
  });
</script>

<style scoped lang="less">
  .favorite {
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
      margin-top: 8px;
      .item {
        display: flex;
        border-bottom: 1px solid rgba(109, 56, 5, 0.09);
        padding: 8px;
        .image {
          width: @fontDefaultSize * 4;
          .img {
            height: 100%;
            width: 100%;
          }
        }
        .info {
          color: #6d3805;
          padding-left: 16px;
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: space-between;
          .name {
            font-weight: bold;
            font-size: @fontDefaultSize * 1.2;
          }
          .icon {
            width: @fontDefaultSize * 1;
            height: @fontDefaultSize * 1;
          }
          .bottom {
            display: flex;
            justify-content: space-between;
            .oper {
              color: @mainColor;
              border-radius: @fontDefaultSize * 0.5;
              padding: 2px;
              display: flex;
              height: @fontDefaultSize* 1.5;
              align-items: center;
            }
            .price {
              font-size: @fontDefaultSize * 1;
              .unit {
                font-size: @fontDefaultSize * 0.8;
              }
              .unit::before {
                content: ' ';
              }
            }
          }
        }
      }
    }
    .delete {
      height: 100%;
    }
  }
</style>
