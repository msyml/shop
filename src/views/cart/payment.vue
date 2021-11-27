<template>
  <div class="payment">
    <div class="card address">
      <div class="title">
        <p>Delivery Location</p>
        <p class="btn" @click="changeAddress">Change</p>
      </div>
      <div class="detail">
        <SimpleIcon class="icon" icon="icon-address"></SimpleIcon>
        <div class="text"> {{ address.city }} {{ address.address }} </div>
      </div>
    </div>
    <div class="card time">
      <div class="title">Expected date & Time</div>
      <div class="simple-input" @click="show = true">
        <SimpleIcon class="icon" icon="icon-date"></SimpleIcon>
        <p>{{ checkDate ? checkDate : 'Select Date' }}</p>
      </div>
      <div class="moments">
        <div
          class="moment"
          :class="{ 'active-moment': activeMoment === item }"
          v-for="item in moments"
          :key="item"
          @click="activeMoment = item"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="store">
      <div class="title flex-s-b">
        <p>In-Store Pick Up</p>
        <p>FREE</p>
      </div>
      <div class="desc flex-s-b" @click="handlerPickUp">
        <p>Some Stores May Be Temporarily Unavalable.</p>
        <SimpleIcon :class="{ 'icon-tran': pickUpCheck }" icon="icon-right"></SimpleIcon>
      </div>
      <div class="search" v-show="pickUpCheck">
        <div class="simple-input">
          <SimpleIcon class="icon" icon="icon-search"></SimpleIcon>
          <input placeholder="Search For Town, Street, Zip Code..." />
        </div>
        <div class="card">
          <div class="item" v-for="item in options" :key="item.name">
            <div class="infor">
              <div class="name">{{ item.name }}</div>
              <div class="number">{{ item.number }} MI</div>
            </div>
            <SimpleIcon class="icon" icon="icon-right" />
          </div>
        </div>
      </div>
    </div>
    <div class="card see">
      <SimpleIcon class="icon see-icon" icon="icon-see"></SimpleIcon>
      <p class="desc">See Items</p>
      <SimpleIcon class="icon" icon="icon-right"></SimpleIcon>
    </div>
    <div class="card method">
      <div class="item"> <p class="title">Payment Method</p></div>
      <div
        class="pay-item"
        v-for="(item, index) in cardList"
        :key="item.id"
        @click="checkMethod(index)"
      >
        <div class="image">
          <van-image lazy-load class="img" round :src="item.image" />
        </div>
        <div class="info">
          <p class="name">{{ item.name }}</p>
          <p class="number" v-if="item.number != 0">{{ item.number }}</p>
        </div>
        <SimpleIcon v-if="item.isCheck" class="icon-check" icon="icon-check"></SimpleIcon>
      </div>
    </div>
    <div class="card total">
      <div class="item"> <p class="title">Order Sammery</p></div>
      <div class="item">
        <p>Subtotal</p>
        <p>${{ subTotal }}</p>
      </div>
      <div class="item">
        <p>Tax</p>
        <p>${{ subTotal }}</p>
      </div>
      <div class="item">
        <p>In-Store Pick Up</p>
        <p>${{ subTotal }}</p>
      </div>
      <div class="item bottom">
        <p>Total</p>
        <p>${{ count }}</p>
      </div>
    </div>
    <SimpleButton class="bottom-btn">CheckOut${{ count }}</SimpleButton>
    <van-calendar v-model:show="show" @confirm="onConfirm" />
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, reactive, toRefs } from 'vue';
  import { SimpleButton, SimpleIcon } from '@/components';
  import { getCardList, getAddressDetail } from '@/api';
  import { Random } from 'mockjs';
  import { useRouter, useRoute } from 'vue-router';
  import { Address } from '../account/types';
  import dayjs from 'dayjs';

  const router = useRouter();
  const route = useRoute();
  const state = reactive({
    count: 0,
    subTotal: 0,
    cardList: [] as Card[],
    pickUpCheck: false,
    address: {} as Address,
    activeMoment: '8AM-11AM',
    show: false,
    checkDate: '',
  });
  const moments = ['8AM-11AM', '11AM-13PM', '13PM-15PM', '15PM-17PM', '17PM-19PM', '19PM-21PM'];
  const options = [
    { name: 'Goteborg Arkaden', number: '1.4' },
    { name: 'Kungsbacka Kungsmassan', number: '17' },
  ];

  const { count, subTotal, cardList, pickUpCheck, address, activeMoment, show, checkDate } =
    toRefs(state);

  onMounted(() => {
    getCards();
    getAddress();
  });

  const onConfirm = (value: any) => {
    state.checkDate = dayjs(value).format('YYYY-MM-DD');
    state.show = false;
  };

  const getAddress = () => {
    const para = {
      id: route.query?.addressId,
    };
    getAddressDetail(para).then((res) => {
      state.address = res.result;
    });
  };

  const getCards = () => {
    const para = {
      pageSize: 1,
    };
    getCardList(para).then((res: Result<PageResult<Card>>) => {
      const cash: Card = {
        id: '1',
        number: 0,
        name: 'Cash On Delivery',
        isCheck: true,
        image: Random.image('4*4', Random.color(), Random.color(), Random.first()),
      };
      res.result.list.push(cash);
      state.cardList = res.result.list;
    });
  };

  const checkMethod = (checkIndex: number) => {
    state.cardList = state.cardList.map((item, index) => {
      if (index === checkIndex) {
        item.isCheck = true;
      } else {
        item.isCheck = false;
      }
      return item;
    });
  };

  const changeAddress = () => {
    router.push({
      path: '/accountAddress',
      query: {
        isCheck: 1,
      },
    });
  };

  const handlerPickUp = () => {
    state.pickUpCheck = !state.pickUpCheck;
  };
</script>

<style scoped lang="less">
  .payment {
    padding: 0 @fontDefaultSize;
    height: calc(100vh - 48px - 44px - 64px);
    .card {
      background-color: #fff4e9;
      border: 1px solid #ffe6cc;
      border-radius: 8px;
      margin-bottom: @fontDefaultSize;
      color: #6d3805;
      .title {
        color: #6d3805;
        font-weight: bold;
      }
    }
    .address {
      padding: @fontDefaultSize;
      .title {
        display: flex;
        justify-content: space-between;
        margin-bottom: @fontDefaultSize;
        p {
          margin: 0;
        }
        .btn {
          color: #ff5e00;
          font-weight: 100;
        }
      }
      .detail {
        display: flex;
        align-items: center;
        .icon {
          width: @fontDefaultSize*1.5;
          height: @fontDefaultSize*1.5;
          color: #ff5e00;
        }
        .text {
          max-width: @fontDefaultSize*12;
          padding-left: @fontDefaultSize;
        }
      }
    }
    .time {
      padding: @fontDefaultSize;
      .simple-input {
        margin: @fontDefaultSize*0.5 0;
        background-color: #fff;
        .icon {
          width: @fontDefaultSize*1.5;
          height: @fontDefaultSize*1.5;
        }
        p {
          padding-left: @fontDefaultSize;
        }
      }
      .moments {
        display: flex;
        flex-wrap: wrap;
        .moment {
          font-size: @fontDefaultSize*0.8;
          border-radius: 4px;
          width: @fontDefaultSize*5;
          text-align: center;
          margin: @fontDefaultSize * 0.2;
          padding: @fontDefaultSize @fontDefaultSize * 0.5;
          background-color: #fff;
        }
        .active-moment {
          color: @mainColor;
        }
      }
    }
    .store {
      color: #6d3805;
      .icon {
        width: @fontDefaultSize;
        height: @fontDefaultSize;
      }
      .icon-tran {
        transform: rotate(90deg);
      }
      .title {
        font-weight: bold;
      }
      .desc {
        p {
          max-width: @fontDefaultSize * 16;
        }
      }
      .search {
        .simple-input {
          margin-bottom: @fontDefaultSize * 0.5;
        }
        .item {
          display: flex;
          padding: @fontDefaultSize;
          align-items: center;
          .infor {
            flex: 1;
            .name {
              font-weight: bold;
              max-width: @fontDefaultSize;
              margin-bottom: @fontDefaultSize;
            }
          }
        }
      }
    }
    .see {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: @fontDefaultSize;
      .icon {
        width: @fontDefaultSize;
        height: @fontDefaultSize;
      }
      .desc {
        font-weight: bold;
        flex: 1;
        padding-left: @fontDefaultSize * 0.5;
      }
      .see-icon {
        width: @fontDefaultSize*3;
        height: @fontDefaultSize*3;
      }
    }
    .total {
      .item {
        display: flex;
        padding: 0 @fontDefaultSize;
        justify-content: space-between;
      }
      .bottom {
        font-weight: bold;
        border-top: 1px solid rgba(109, 56, 5, 0.11);
      }
    }
    .method {
      .item {
        padding: 0 @fontDefaultSize;
      }
      .pay-item {
        display: flex;
        align-items: center;
        padding: 0 @fontDefaultSize;
        .image {
          width: @fontDefaultSize*3;
          height: @fontDefaultSize*3;
        }
        .info {
          padding-left: @fontDefaultSize * 0.5;
          color: #6d3805;
          flex: 1;
          .name {
            font-weight: bold;
          }
        }
        .icon {
          color: #6d3805;
          width: @fontDefaultSize;
          height: @fontDefaultSize;
        }
        .icon-check {
          color: #58a919;
          width: @fontDefaultSize;
          height: @fontDefaultSize;
        }
      }
      .pay-item ~ .pay-item {
        border-top: 1px solid rgba(109, 56, 5, 0.11);
        padding: @fontDefaultSize;
      }
    }
  }
</style>
