<template>
  <div class="explore">
    <div class="title">Categories</div>
    <div class="search">
      <SimpleIcon class="icon" icon="icon-search" />
      <input placeholder="Search" />
    </div>
    <div class="list">
      <div class="category-item" v-for="item in categoryList" :key="item.id">
        <!-- <SimpleIcon class="c-icon" icon="icon-search"></SimpleIcon> -->
        <img :src="item.image" />
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { SimpleIcon } from '@/components';
  import { getCategoryList } from '@/api';

  const categoryList = ref<Category[]>([]);

  onMounted(() => {
    getCategoryList({}).then((res: Result<PageResult<Category>>) => {
      categoryList.value = res.result.list;
    });
  });
</script>

<style scoped lang="less">
  .explore {
    display: flex;
    flex-direction: column;
    align-items: center;
    .list {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
