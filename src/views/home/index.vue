<template>
  <div class="home">
    <SimpleInput></SimpleInput>
    <div class="title"
      ><span class="sub-title">Popular deals</span><span class="all"> See All</span></div
    >
    <div class="category">
      <div class="category-item" v-for="item in categoryList" :key="item.id">
        <van-image lazy-load class="img" :src="item.image" />
        <span>{{ item.name }}</span>
      </div>
    </div>
    <div class="title"
      ><span class="sub-title">Popular deals </span><span class="all">See All</span></div
    >
    <div class="popular">
      <SimpleProductCard class="item" v-for="item in productList" :key="item.id" :product="item">
      </SimpleProductCard>
      <!-- <div
        class="popular-item"
        v-for="item in productList"
        :key="item.id"
        @click="toDetail(item.id)"
      >
        <div class="image">
          <van-image lazy-load class="img" :src="item.image" />
        </div>
        <div class="info">
          <div class="name">{{ item.name }}</div>
          <div class="unit">1kg,priceg</div>
          <div class="price">${{ item.price }}</div>
          <div class="add">+</div>
        </div>
      </div>-->
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
    font-size: @fontDefaultSize;
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
        img {
          border-radius: 100%;
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
        .image {
          .img {
            border-radius: 16px;
          }
        }
        .info {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .name {
            color: #6d3805;
            font-weight: bold;
          }
          .unit {
            color: #929292;
          }
          .price {
            color: @mainColor;
            font-weight: bold;
          }
          .add {
            position: absolute;
            right: 8px;
            bottom: 8px;
            background-color: #3aa14c;
            color: #fff;
            border-radius: 100%;
            font-weight: bold;
            text-align: center;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 720px) {
    .home {
      .title {
        margin: 24px 0;
      }
      .category {
        .category-item {
          .img {
            width: @fontDefaultSize * 5;
          }
        }
      }
      .popular {
        .popular-item {
          .image {
            .img {
              width: 108px;
              height: 100%;
            }
          }
          .info {
            .name {
              font-size: @fontDefaultSize;
            }
            .unit {
              font-size: @fontDefaultSize * 0.8;
            }
            .price {
              font-size: @fontDefaultSize;
            }
            .add {
              width: @fontDefaultSize * 1.5;
              height: @fontDefaultSize * 1.5;
              line-height: @fontDefaultSize * 1.5;
              font-size: @fontDefaultSize;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 721px) {
    .home {
      .title {
        margin: 8px 0;
      }
      .category {
        font-size: @fontDefaultSize * 2;

        .category-item {
          img {
            width: @fontDefaultSize * 8;
          }
        }
      }
      .popular {
        .popular-item {
          .image {
            img {
              width: @fontDefaultSize * 15;
              height: 100%;
            }
          }
          .info {
            .name {
              font-size: @fontDefaultSize*3;
            }
            .unit {
              font-size: @fontDefaultSize * 2;
            }
            .price {
              font-size: @fontDefaultSize * 3;
            }
            .add {
              width: @fontDefaultSize * 4.5;
              height: @fontDefaultSize * 4.5;
              line-height: @fontDefaultSize * 4.5;
              font-size: @fontDefaultSize * 3;
            }
          }
        }
      }
    }
  }
</style>
