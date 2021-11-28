<template>
  <div>
    <div class="list">
      <div class="item" v-for="(item, index) in cartList" :key="item.id">
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
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, ref, toRefs } from 'vue';
  import { SimpleIcon } from '@/components';
  import { onBeforeRouteLeave } from 'vue-router';

  const state = reactive({
    cartList: [] as Product[],
  });
  const { cartList } = toRefs(state);

  onMounted(() => {
    getList();
  });

  onBeforeRouteLeave(() => {
    sessionStorage.setItem('cartList', JSON.stringify(state.cartList));
  });

  const getList = () => {
    const list = JSON.parse(sessionStorage.cartList);
    state.cartList = list;
  };

  const changeCount = (type: string, index: number) => {
    if (type === 'add') {
      state.cartList[index].count += 1;
    } else if (type === 'minus') {
      if (state.cartList[index].count > 1) {
        state.cartList[index].count -= 1;
      }
    }
  };
</script>

<style scoped lang="less">
  .list {
    color: @tabBarUnActiveColor;
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
</style>
