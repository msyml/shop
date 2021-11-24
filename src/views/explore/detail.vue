<template>
  <div class="detail">
    <SimpleInput></SimpleInput>
    <van-config-provider :theme-vars="themeVars">
      <div class="category">
        <!-- <div
          v-for="item in categoryList"
          :key="item.id"
          class="item"
          :class="{ 'item-active': activeName === item.name }"
          @click="changeCategory(item)"
        >
          <p>{{ item.name }}</p>
        </div> -->

        <van-tabs v-model:active="active" @change="changeCategory">
          <van-tab v-for="item in categoryList" :key="item.id" :title="item.name"></van-tab>
        </van-tabs>
      </div>
      <div class="product">
        <SimpleProductCard class="item" v-for="item in productList" :key="item.id" :product="item">
        </SimpleProductCard>
      </div>
    </van-config-provider>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, watch } from 'vue';
  import { SimpleInput, SimpleProductCard } from '@/components';
  import { getCategoryList, getProductList } from '@/api';
  import { useStore } from 'vuex';

  const store = useStore();
  const categoryList = ref<Category[]>([]);
  const productList = ref<Product[]>([]);
  const activeName = ref<String>('');

  onMounted(() => {
    getCategory();
  });

  watch(activeName, (value) => {
    store.dispatch('asyncChangeTitle', value);
  });

  const active = ref(0);

  const themeVars = {
    tabsBottomBarColor: '#ff5e00',
    tabTextColor: '#804F1E',
    tabActiveTextColor: '#804F1E',
  };

  const changeCategory = (index: number) => {
    active.value = index;
    const para = {
      id: categoryList.value[index].id,
    };
    activeName.value = categoryList.value[index].name;
    getProductList(para).then((res: Result<PageResult<Product>>) => {
      productList.value = res.result.list;
    });
  };

  const getCategory = () => {
    const para = {
      pageSize: 15,
    };
    getCategoryList(para).then((res: Result<PageResult<Category>>) => {
      if (res.result.list.length > 0) {
        categoryList.value = res.result.list;
        changeCategory(0);
      }
    });
  };
</script>

<style scoped lang="less">
  .detail {
    .category {
      display: flex;
      color: @mainColor;
      overflow-x: auto;
      font-weight: bold;
      font-size: @fontDefaultSize*1;
      .item {
        flex: 1;
        word-break: keep-all;
        margin-left: 16px;
      }
      .item-active {
        border-bottom: 2px solid @mainColor;
      }
    }
    .product {
      flex-wrap: wrap;
      display: flex;
      padding-top: 16px;
      overflow: auto;
      height: calc(100vh - 224px);
      .item {
        width: 144px;
        margin: 8px;
        padding: 12px;
      }
    }
  }
</style>
