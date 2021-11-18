<template>
  <div class="home">
    <div class="search">
      <SimpleIcon class="icon" icon="icon-search" />
      <input placeholder="Search" />
    </div>
    <div class="title"
      ><span class="sub-title">Popular deals</span><span class="all"> See All</span></div
    >
    <div class="category">
      <div class="category-item" v-for="item in categoryList" :key="item.id">
        <img :src="item.image" />
        {{ item.name }}
      </div>
    </div>
    <div class="title"
      ><span class="sub-title">Popular deals </span><span class="all">See All</span></div
    >
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
  import { SimpleIcon } from '@/components';
  import { getCategoryList, getProductList } from '@/api';
  import { Product } from './types';

  defineProps({
    msg: String,
  });

  const categoryList = ref<Category[]>([]);
  const productList = ref<Product[]>([]);

  onMounted(() => {
    Promise.all([
      getCategoryList({}).then((res: Result<PageResult<Category>>) => {
        categoryList.value = res.result.list;
      }),
      getProductList({}).then((res: Result<PageResult<Product>>) => {
        productList.value = res.result.list;
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
    overflow-x: hidden;
    .title {
      display: flex;
      margin: 2vw;
      width: 100vw - @aroundMargin*3;
      justify-content: space-between;
      font-size: @fontDefaultSize * 1.2;
      font-weight: bold;
      .sub-title {
        color: @tabBarUnActiveColor;
      }
      .all {
        color: @mainColor;
      }
    }
    .simple-title {
      margin: 2vh 0;
    }
    .category {
      margin-bottom: 4vh;
      display: flex;
      overflow-x: auto;
      width: 100vw;
      .category-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25vw;
        color: #6d3805;
        margin: 0 3vw;
        img {
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
        box-shadow: 0vw 0vw 1vw 1vw rgba(0, 0, 0, 0.2);
        padding: 4vw;
        .image {
          img {
            width: 100%;
            height: 100%;
          }
        }
        .info {
          margin-top: 1vh;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .name {
            font-size: @fontDefaultSize * 1.5;
            color: #6d3805;
            font-weight: bold;
          }
          .unit {
            font-size: @fontDefaultSize * 0.8;
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

  @media only screen and (max-width: 720px) {
    .home {
      .popular {
        .popular-item {
          .image {
            width: 30vw;
            height: 27vw;
          }
        }
      }
    }
    .category-item {
      img {
        width: @fontDefaultSize * 6;
      }
    }
  }
  @media only screen and (min-width: 721px) {
    
    .home {
      font-size: 3.2vw;
      .category {
        .category-item {
          img {
            width: @fontDefaultSize * 3;
          }
        }
      }
      .popular {
        .popular-item {
          .image {
            width: 10vw;
            height: 9vw;
          }
        }
      }
    }
  }
</style>
