<template>
  <div class="detail">
    <SimpleInput></SimpleInput>
    <div class="category">
      <div v-for="item in categoryList" :key="item.id" class="item item-active">
        <p>{{ item.name }}</p>
      </div>
    </div>
    <div class="product"></div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { SimpleInput } from '@/components';
  import { getCategoryList } from '@/api';

  const categoryList = ref<Category[]>([]);

  onMounted(() => {
    getCategory();
  });

  const getCategory = () => {
    const para = {
      pageSize: 15,
    };
    getCategoryList(para).then((res: Result<PageResult<Category>>) => {
      categoryList.value = res.result.list;
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
