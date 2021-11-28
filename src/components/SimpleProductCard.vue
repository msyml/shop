<template>
  <div class="popular-item" @click="toDetail(product.id)">
    <div class="image">
      <van-image round width="100%" height="100%" lazy-load :src="product.image" />
    </div>
    <div class="info">
      <div class="name">{{ product.name }}</div>
      <div class="unit">1kg,priceg</div>
      <div class="price">${{ product.price }}</div>
      <div class="add">+</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  });

  const toDetail = (id: string) => {
    const path = `\homeProductDetail`;
    router.push({
      path,
      query: {
        id: id,
      },
    });
  };
</script>

<style scoped lang="less">
  .popular-item {
    position: relative;
    border: 1px solid #f0f0f0;
    border-radius: 16px;
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.2);
    .image {
      text-align: center;
      width: @fontDefaultSize * 6;
      height: @fontDefaultSize * 6;
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
        font-size: @fontDefaultSize * 0.8;
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
        width: @fontDefaultSize * 1.5;
        height: @fontDefaultSize * 1.5;
        line-height: @fontDefaultSize * 1.5;
      }
    }
  }

  // @media only screen and (max-width: 720px) {
  //   .popular-item {
  //     .info {
  //       .unit {
  //         font-size: @fontDefaultSize * 0.8;
  //       }
  //       .add {
  //         width: @fontDefaultSize * 1.5;
  //         height: @fontDefaultSize * 1.5;
  //         line-height: @fontDefaultSize * 1.5;
  //       }
  //     }
  //   }
  // }
  // @media only screen and (min-width: 721px) {
  //   .popular-item {
  //     .info {
  //       .name {
  //         font-size: @fontDefaultSize*3;
  //       }
  //       .unit {
  //         font-size: @fontDefaultSize * 2;
  //       }
  //       .price {
  //         font-size: @fontDefaultSize * 3;
  //       }
  //       .add {
  //         width: @fontDefaultSize * 4.5;
  //         height: @fontDefaultSize * 4.5;
  //         line-height: @fontDefaultSize * 4.5;
  //         font-size: @fontDefaultSize * 3;
  //       }
  //     }
  //   }
  // }
</style>
