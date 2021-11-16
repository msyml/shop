<template>
  <div class="home">
    <div class="top">
      <SimpleIcon icon="icon-place"></SimpleIcon>
      Lungangen
    </div>
    <div class="search">
      <SimpleIcon class="icon" icon="icon-search" />
      <input placeholder="Search" />
    </div>
    <SimpleTitle class="simple-title"></SimpleTitle>
    <div class="category">
      <div class="category-item" v-for="item in categoryList" :key="item.id">
        <!-- <SimpleIcon class="c-icon" icon="icon-search"></SimpleIcon> -->
        <img :src="item.image" />
        {{ item.name }}
      </div>
    </div>
    <SimpleTitle class="simple-title" title="Popular Deals"></SimpleTitle>
    <div class="popular">
      <div class="popular-item" v-for="item in productList" :key="item.id">
        <div class="image">
          <img :src="item.image" />
        </div>
        <div class="info">
          <div class="name">{{ item.name }}</div>
          <div class="unit">1kg,priceg</div>
          <div class="price">${{ item.price }}</div>
          <div class="add">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { SimpleIcon, SimpleTitle } from '@/components';
  import { getCategoryList, getProductList } from '@/api';
  import { Category, Product } from './types';
  import { AxiosResponse } from 'axios';

  defineProps({
    msg: String,
  });

  const categoryList = ref<Category[]>([]);
  const productList = ref<Product[]>([]);

  onMounted(() => {
    Promise.all([
      getCategoryList({}).then((res: AxiosResponse<Result<PageResult<Category>>>) => {
        categoryList.value = res.data.result.list;
      }),
      getProductList({}).then((res: AxiosResponse<Result<PageResult<Product>>>) => {
        productList.value = res.data.result.list;
      }),
    ]).then(() => {
      // loading = false
    });
  });
</script>

<style scoped lang="less">
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    justify-content: space-around;
    overflow-x: hidden;
    .top {
      font-size: @fontDefaultSize * 1.5;
      font-weight: bold;
      color: @mainColor;
    }
    .search {
      width: 100vw - @aroundMargin * 2;
      height: @fontDefaultSize * 2;
      display: flex;
      position: relative;
      color: #6d380577;
      .icon {
        position: absolute;
        top: @fontDefaultSize * 0.5;
        left: @fontDefaultSize;
      }
      input {
        border: none;
        border-radius: 0.8vw;
        width: 100%;
        height: 100%;
        padding-left: @fontDefaultSize * 2.5;
        background-color: #f3f3f3;
      }
    }
    .simple-title {
      margin: 2vh 0;
    }
    .category {
      display: flex;
      overflow-x: auto;
      width: 100vw;
      .category-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25vw;
        margin: 0 3vw;
        .c-icon {
          font-size: @fontDefaultSize * 6;
          border-radius: 100%;
        }
        img {
          width: @fontDefaultSize * 6;
          border-radius: 100%;
        }
      }
    }
    .popular {
      display: flex;
      overflow-x: auto;
      width: 100vw;
      padding: 4vw;
      .popular-item {
        position: relative;
        border: 1px solid #f0f0f0;
        border-radius: 16px;
        margin: 0 3vw;
        box-shadow: 0vw 0vw 1vw 1vw rgba(0, 0, 0, 0.5);
        padding: 4vw;
        .image {
          width: 30vw;
          height: 27vw;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .info {
          margin-top: 1vh;
          .name {
            font-size: @fontDefaultSize * 1.5;
            color: #6d3805;
            font-weight: bold;
          }
          .unit {
            color: #929292;
          }
          .price {
            color: @mainColor;
            font-size: @fontDefaultSize * 1.5;

            font-weight: bold;
          }
          .add {
            position: absolute;
            right: 4vw;
            bottom: 4vw;
            background-color: #3aa14c;
            color: #fff;
            width: @fontDefaultSize * 2;
            height: @fontDefaultSize * 2;
            line-height: @fontDefaultSize * 2;
            border-radius: 100%;
            font-weight: bold;
            font-size: @fontDefaultSize * 1.5;
            text-align: center;
          }
        }
      }
    }
  }
</style>
