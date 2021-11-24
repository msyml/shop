<template>
  <div class="profile">
    <div class="options">
      <div class="item" v-for="item in options" :key="item.path" @click="toPage(item.path)">
        <SimpleIcon class="icon" :icon="item.icon"></SimpleIcon
        ><span class="label">{{ item.label }}</span>
        <SimpleIcon class="icon right" icon="icon-right"></SimpleIcon>
      </div>
      <div class="title"> App Settings </div>
      <div class="options">
        <div class="item">
          <SimpleIcon class="icon" icon="icon-bell"></SimpleIcon
          ><span class="label">Notifications</span>
          <van-switch
            v-model="notificationsCheck"
            active-color="#FF5E00"
            size="24px"
            inactive-color="#dcdee0"
          ></van-switch>
        </div>
        <div class="item">
          <SimpleIcon class="icon" icon="icon-tran"></SimpleIcon
          ><span class="label">Language </span>
          <span class="language">English</span>
          <SimpleIcon class="icon right" icon="icon-right"></SimpleIcon>
        </div>
        <div class="item" @click="toPage('login')">
          <SimpleIcon class="icon" icon="icon-logout"></SimpleIcon><span class="label">Logout</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { Option } from './types';
  import { SimpleIcon } from '@/components';
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const toPage = (path: string) => {
    router.push({
      path,
    });
  };
  const options: Option[] = [
    { icon: 'icon-user', label: 'Edit Profile', path: 'accountEditProfile' },
    { icon: 'icon-key', label: 'Change Password', path: 'accountChangePassword' },
    { icon: 'icon-card', label: 'My Cards', path: 'accountCards' },
  ];

  const notificationsCheck = ref(true);
  onMounted(() => {});
</script>

<style scoped lang="less">
  .profile {
    color: #804f1e;
    font-weight: bold;
    .options {
      font-size: @fontDefaultSize * 1.25;
      .item {
        margin: @fontDefaultSize * 1.5 @fontDefaultSize;
        display: flex;
        align-items: center;
        .icon {
          width: @fontDefaultSize * 1.5;
          height: @fontDefaultSize * 1.5;
        }
        .right {
          width: @fontDefaultSize * 1;
          height: @fontDefaultSize * 1;
        }
        .label {
          flex: 1;
          margin-left: @fontDefaultSize;
        }
        .language {
          font-size: @fontDefaultSize;
          font-weight: 100;
          margin-right: @fontDefaultSize;
        }
      }
    }
    .title {
      color: @mainColor;
      margin: @fontDefaultSize;
      font-size: @fontDefaultSize*1.5;
    }
  }
</style>
