<template>
  <div class="home">
    <SimpleInput></SimpleInput>
    <div class="title"
      ><span class="sub-title">Popular deals</span><span class="all"> See All</span></div
    >
    <div class="category">
      <div class="category-item" v-for="item in categoryList" :key="item.id">
        <div class="image">
          <van-image height="100%" width="100%" round lazy-load class="img" :src="item.image" />
        </div>
        <span>{{ item.name }}</span>
      </div>
    </div>
    <div class="title"
      ><span class="sub-title">Popular deals </span><span class="all">See All</span></div
    >
    <div class="popular">
      <SimpleProductCard class="item" v-for="item in productList" :key="item.id" :product="item">
      </SimpleProductCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { SimpleInput, SimpleProductCard } from '@/components';
  import { getCategoryList, getProductList } from '@/api';

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
    height: calc(100vh - 128px);
    justify-content: space-around;
    .title {
      display: flex;
      padding: 0 @aroundMargin*1.5;
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
    .category {
      display: flex;
      overflow-x: auto;
      .category-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #6d3805;
        margin: 0 12px;
        .image {
          width: @fontDefaultSize * 5;
          height: @fontDefaultSize * 5;
        }
      }
    }
    .popular {
      display: flex;
      overflow-x: auto;
      padding: 12px;
      .popular-item {
        position: relative;
        border: 1px solid #f0f0f0;
        border-radius: 16px;
        margin: 0 16px;
        box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.2);
        padding: 8px;
      }
    }
  }
</style>
