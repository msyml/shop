<template>
  <div class="detail">
    <SimpleInput></SimpleInput>
    <div class="category">
      <div
        v-for="item in categoryList"
        :key="item.id"
        class="item"
        :class="{ 'item-active': activeName === item.name }"
        @click="changeCategory(item)"
      >
        <p>{{ item.name }}</p>
      </div>
    </div>
    <div class="product">
      <div class="item" v-for="item in productList" :key="item.id">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, watch } from 'vue';
  import { SimpleInput } from '@/components';
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

  const changeCategory = (item: Category) => {
    activeName.value = item.name;
    const para = {
      id: item.id,
    };
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
        changeCategory(res.result.list[0]);
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
      .item {
        flex: 1;
        word-break: keep-all;
        margin-left: 16px;
      }
      .item-active {
        border-bottom: 2px solid @mainColor;
      }
    }
  }
</style>
