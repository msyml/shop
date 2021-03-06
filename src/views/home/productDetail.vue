<template>
  <div class="detail">
    <ProductBackgroundIcon class="back"></ProductBackgroundIcon>
    <div class="info">
      <div class="image">
        <van-image round lazy-load class="img" :src="image" />
      </div>
      <div class="title">
        {{ name }}
      </div>
      <div class="price">
        <span class="number">${{ price }}</span
        >/{{ unit }}
      </div>
      <div class="desc">
        {{ desc }}
      </div>
      <div class="icons">
        <div class="oper"
          ><SimpleIcon class="icon" @click="changeCount('minus')" icon="icon-minus" />
          <input class="count" v-model="count" />
          <SimpleIcon class="icon" @click="changeCount('add')" icon="icon-add"
        /></div>
        <SimpleIcon
          class="icon heart"
          @click="changeFavorite"
          :icon="isFavorite ? 'icon-heart' : 'icon-heart-not-fill'"
        ></SimpleIcon>
      </div>
      <div class="button">
        <SimpleButton @click="addCart">Add Cart</SimpleButton>
      </div>
    </div>
    <div class="related">
      <div class="title">You may also need</div>
      <div class="list">
        <SimpleProductCard class="item" v-for="item in productList" :key="item.id" :product="item">
        </SimpleProductCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onBeforeUpdate, onMounted, reactive, ref, toRefs } from 'vue';
  import { getProductDetail, getProductList } from '@/api';
  import { SimpleIcon, SimpleButton, SimpleProductCard } from '@/components';
  import ProductBackgroundIcon from '@/layout/ProductBackgroundIcon.vue';
  import { useRoute, onBeforeRouteUpdate } from 'vue-router';
  import { Notify } from 'vant';

  const route = useRoute();

  const productList = ref<Product[]>([]);

  const detail = reactive<Product>({
    id: '',
    name: '',
    image: '',
    count: 0,
    price: 0,
    desc: '',
    unit: '',
    isFavorite: false,
  });

  onBeforeRouteUpdate(() => {
    getDetail(route.query?.id as string);
  });

  const { id, name, image, count, price, desc, unit, isFavorite } = toRefs(detail);

  const addCart = () => {
    Notify({
      message: 'add cart success',
      type: 'success',
    });
  };

  const getDetail = (id: string) => {
    const para = {
      id,
    };
    getProductDetail(para).then((res: Result<Product>) => {
      Object.keys(res.result).forEach((key: string) => {
        detail[key] = res.result[key];
      });
      getMatchProduct(id);
    });
  };

  const changeCount = (type: string) => {
    if (type === 'add') {
      detail.count += 1;
    } else if (type === 'minus') {
      if (detail.count > 1) {
        detail.count -= 1;
      }
    }
  };

  const changeFavorite = () => {
    detail.isFavorite = !detail.isFavorite;
  };

  const getMatchProduct = (id: string) => {
    const para = {
      id,
      pageSize: 5,
    };
    getProductList(para).then((res: Result<PageResult<Product>>) => {
      productList.value = res.result.list;
    });
  };

  onMounted(() => {
    getDetail(route.query?.id as string);
  });
</script>

<style scoped lang="less">
  .detail {
    overflow: auto;
    height: calc(100vh - 108px);
    .back {
      position: absolute;
      width: @fontDefaultSize * 12;
      height: @fontDefaultSize * 12;
      right: 0;
      top: 0;
      z-index: 1;
    }
    .info {
      padding: 0 @fontDefaultSize;
      display: flex;
      flex-direction: column;
      color: #6d3805;
      border-bottom: 1px solid rgba(109, 56, 5, 0.17);
      margin-bottom: @fontDefaultSize;
      .image {
        align-self: center;
        max-width: @fontDefaultSize * 16;
        max-height: @fontDefaultSize * 16;
      }
      .title {
        font-size: @fontDefaultSize * 2;
        font-weight: bold;
      }
      .price {
        margin-bottom: @fontDefaultSize*1;
        .number {
          font-size: @fontDefaultSize*1.5;
        }
        .number::after {
          content: ' ';
        }
      }
      .desc {
        font-size: @fontDefaultSize * 0.9;
        margin-bottom: @fontDefaultSize;
      }
      .button {
        align-self: center;
        text-align: center;
      }
      .icons {
        display: flex;
        margin-bottom: @fontDefaultSize*0.5;
        .oper {
          flex: 1;
          background-color: #f4f4f4;
          color: #6d3805;
          border-radius: @fontDefaultSize;
          padding: 2px;
          display: flex;
          margin-right: @fontDefaultSize*2;
          height: @fontDefaultSize* 2;
          align-items: center;
          .icon {
            color: #6d3805;
            background-color: #fff;
            border-radius: 100%;
            width: @fontDefaultSize * 1.5;
            height: @fontDefaultSize * 1.5;
            padding: @fontDefaultSize * 0.3;
          }
          .count {
            flex: 1;
            border: none;
            font-size: @fontDefaultSize * 1.5;
            background-color: #f4f4f4;
            width: @fontDefaultSize * 3;
            margin: 0;
            font-weight: bold;
            text-align: center;
          }
        }
        .icon {
          width: @fontDefaultSize*1.5;
          height: @fontDefaultSize*1.5;
          color: #6d3805;
        }
        .heart {
          color: @mainColor;
        }
      }
    }

    .related {
      .title {
        color: #6d3805;
        padding-left: @fontDefaultSize;
        font-weight: bold;
        margin-bottom: @fontDefaultSize;
      }
      .list {
        overflow-x: auto;
        display: flex;
        .item {
          width: 150px;
          margin: 8px;
          padding: 12px;
        }
      }
    }
  }
</style>
