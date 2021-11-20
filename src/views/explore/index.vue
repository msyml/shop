<template>
  <div class="explore">
    <SimpleInput></SimpleInput>
    <div class="list">
      <div
        class="category-item"
        @click="toDetail(item)"
        v-for="item in categoryList"
        :key="item.id"
      >
        <img :src="item.image" />
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { SimpleInput } from '@/components';
  import { getCategoryList } from '@/api';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const categoryList = ref<Category[]>([]);

  const toDetail = (item: Category) => {
    const path = `/exploreDetail?id=${item.id}`;
    router.push({
      path,
    });
  };

  onMounted(() => {
    getCategoryList({}).then((res: Result<PageResult<Category>>) => {
      categoryList.value = res.result.list;
    });
  });
</script>

<style scoped lang="less">
  .explore {
    // display: flex;
    flex-direction: column;
    overflow: hidden;
    .list {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      overflow: auto;
      margin-top: 8px;
      height: calc(100vh - 48px - 44px - 56px);
      .category-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 120px;
        font-size: 16px;
        img {
          width: 80%;
          border-radius: 100%;
        }
      }
      .category-item ~ .category-item {
        margin-bottom: 16px;
      }
    }
  }
</style>
