<template>
  <div class="cart">
    <div class="list">
      <van-swipe-cell v-for="(item, index) in cartList" :key="item.id">
        <div class="item">
          <div class="image">
            <van-image lazy-load class="img" round :src="item.image" />
          </div>
          <div class="info">
            <div class="name">
              {{ item.name }}
            </div>
            <div class="bottom">
              <div class="oper">
                <SimpleIcon @click="changeCount('minus', index)" class="icon" icon="icon-minus" />
                <input class="count" v-model="item.count" />
                <SimpleIcon @click="changeCount('add', index)" class="icon" icon="icon-add" />
              </div>
              <div class="price"
                >${{ item.price }}<span class="unit">{{ item.unit }}</span></div
              >
            </div>
          </div>
        </div>
        <template #right>
          <van-button
            class="delete"
            @click="removeCart(index)"
            color="#A42B32"
            icon="delete-o"
            type="primary"
          />
        </template>
      </van-swipe-cell>
    </div>
    <div class="btn">
      <SimpleButton @click="toPage">CheckOut</SimpleButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { getProductList } from '@/api';
  import { SimpleIcon, SimpleButton } from '@/components';
  import {useRouter} from 'vue-router'

  const cartList = ref<Product[]>([]);
  const router = useRouter();

  onMounted(() => {
    getCartList();
  });

  const removeCart = (index: number) => {
    cartList.value.splice(index, 1);
  };

  const toPage = () => {
    router.push({
      path: '/cartPayment'
    })
  }

  const changeCount = (type: string, index: number) => {
    if (type === 'add') {
      cartList.value[index].count += 1;
    } else if (type === 'minus') {
      if (cartList.value[index].count > 1) {
        cartList.value[index].count -= 1;
      }
    }
  };

  const getCartList = () => {
    const para = {
      pageSize: 4,
    };
    getProductList(para).then((res: Result<PageResult<Product>>) => {
      cartList.value = res.result.list;
    });
  };
</script>

<style scoped lang="less">
  .cart {
    color: @tabBarUnActiveColor;
    .list {
      margin-top: 8px;
      .item {
        display: flex;
        border-bottom: 1px solid rgba(109, 56, 5, 0.09);
        padding: 8px;
        .image {
          width: @fontDefaultSize * 4;
          .img {
            height: 100%;
            width: 100%;
          }
        }
        .info {
          padding-left: 16px;
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: space-between;
          .name {
            font-weight: bold;
            font-size: @fontDefaultSize * 1.2;
          }
          .bottom {
            display: flex;
            justify-content: space-between;
            .oper {
              background-color: #f4f4f4;
              color: #6d3805;
              border-radius: @fontDefaultSize * 0.5;
              padding: 2px;
              display: flex;
              height: @fontDefaultSize* 1.5;
              align-items: center;
              .icon {
                color: #6d3805;
                background-color: #fff;
                border-radius: 100%;
                width: @fontDefaultSize * 1.5;
                height: @fontDefaultSize * 1.5;
              }
              .count {
                border: none;
                font-size: @fontDefaultSize * 1;
                background-color: #f4f4f4;
                width: @fontDefaultSize * 3;
                margin: 0;
                font-weight: bold;
                text-align: center;
              }
            }
            .price {
              font-size: @fontDefaultSize * 1;
              .unit {
                font-size: @fontDefaultSize * 0.8;
              }
              .unit::before {
                content: ' ';
              }
            }
          }
        }
      }
    }
    .btn {
      position: absolute;
      bottom: @fontDefaultSize * 4;
      margin: 0 @fontDefaultSize;
    }
    .delete {
      height: 100%;
    }
  }
</style>
