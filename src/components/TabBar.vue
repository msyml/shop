<template>
    <div class="tab-bar">
        <div class="background-box"></div>
        <div
            v-for="(item, index) in options"
            :key="item.label"
            class="item"
            :class="{ 'item-active': index === activeIndex }"
            @click="handlerTabBarClick(item, index)"
        >
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#' + item.icon" />
            </svg>
            {{ item.label }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { TabBarItem } from './types';
import { useRoute, useRouter } from 'vue-router';
const options: TabBarItem[] = [
    { label: 'Shop', path: '/home', icon: 'icon-home' },
    { label: 'Explore', path: '/explore', icon: 'icon-explore' },
    { label: 'Cart', path: '/cart', icon: 'icon-cart' },
    { label: 'Favorite', path: '/favorite', icon: 'icon-heart' },
    { label: 'Account', path: '/account', icon: 'icon-user' },
];
const router = useRouter();
const route = useRoute();
const activeIndex = ref<number>(0);

onMounted(() => {
    checkRoute();
});

const checkRoute = () => {
    try {
        options.forEach((item: TabBarItem, index: number) => {
            if (route.path === item.path) {
                activeIndex.value = index;
                throw new Error('匹配');
            }
        });
    } catch { }
};

const handlerTabBarClick = (item: TabBarItem, index: number) => {
    router.replace(item.path);
    activeIndex.value = index;
};
</script>

<style scoped lang="less">
.tab-bar {
    background-color: #fff;
    color: @tabBarUnActiveColor;
    display: flex;
    position: absolute;
    justify-content: space-around;
    width: 100%;
    bottom: 0;
    font-size: 4vw;
    .item {
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .item-active {
        color: @mainColor;
    }
    .background-box {
        position: absolute;
        left: 0;
        right: 0;
        top: -41.18%;
        bottom: -1.47%;
        border-radius: 4vw 4vw 0 0; 
        border: 1px solid #e9e9e9;
        box-sizing: border-box;
        box-shadow: 0 -3px 13px rgba(0, 0, 0, 0.06);
    }
}
</style>
