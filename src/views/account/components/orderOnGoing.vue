<template>
  <div class="ongoing">
    <SimpleEmpty v-if="options.length === 0" icon="icon-order-ongoing">
      <template #desc>
        <p class="desc">
          There is n ongoing order right now.<br />
          You can order from home
        </p>
      </template>
    </SimpleEmpty>
    <div class="list" v-else>
      <van-steps direction="vertical" :active="1">
        <van-step class="item" v-for="item in options" :key="item.icon">
          <SimpleIcon class="icon" :icon="item.icon"></SimpleIcon>
          <span class="desc">{{ item.desc }}</span>
        </van-step>
      </van-steps>
      <!-- <div class="item" v-for="item in options" :key="item.icon">
        <SimpleIcon class="icon" :icon="item.icon"></SimpleIcon>
        <span class="desc">{{ item.desc }}</span>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { SimpleEmpty } from '@/components';
  import { GoingType } from '../types';
  import { SimpleIcon } from '@/components';

  const options: GoingType[] = [
    { desc: 'We are packing your items...', icon: 'icon-packing' },
    { desc: 'Your order is delivering to your location...', icon: 'icon-car' },
    { desc: 'Your order is received.', icon: 'icon-received' },
  ];
</script>

<style scoped lang="less">
  .ongoing {
    .desc {
      text-align: center;
      font-weight: 500;
      color: #804f1e;
    }
    .list {
      .item {
        display: flex;
        align-items: center;
        // border-left: 1px dotted #c6c6c6;
        // margin-left: @fontDefaultSize;
        .icon {
          width: @fontDefaultSize * 4;
          height: @fontDefaultSize * 4;
        }
        .desc {
          color: #804f1e;
        }
      }
      // .item::before {
      //   position: absolute;
      //   content: '';
      //   top: 4px;
      //   left: 6%;
      //   width: 6px;
      //   height: 6px;
      //   border-radius: 50%;
      //   background: #ccc;
      //   border: 3px solid #eee;
      // }
      // .item:nth-child(1)::before {
      //   background: #5ec401;
      //   border-color: #5ec401;
      // }
    }
  }
</style>
