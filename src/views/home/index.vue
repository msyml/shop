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
      <div class="category-item">
        <SimpleIcon icon="icon-search"></SimpleIcon>
        Name
      </div>
    </div>
    <SimpleTitle class="simple-title" title="Popular Deals"></SimpleTitle>
    <div class="popular">
      <div class="popular-item">
        <div class="image">这是图片</div>
        <div class="info">
          <div class="name">名字</div>
          <div class="unit">1kg price</div>
          <div class="price">$ 13.99</div>
          <div class="add">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import { SimpleIcon, SimpleTitle } from '@/components';
  import { getProductList } from '@/api';

  defineProps({
    msg: String,
  });

  onMounted(() => {
    // getProductList({}).then((res) => {
    //   console.log(res);
    // });
  });
</script>

<style scoped lang="less">
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    .popular {
      display: flex;
      .popular-item {
        box-shadow: 1px 1px 1px black;
      }
    }
  }
</style>
