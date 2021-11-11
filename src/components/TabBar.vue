<template>
    <div class="tab-bar">
        <div
            v-for="(item,index) in options"
            :key="item.label"
            class="item"
            :class="{ 'item-active': index === activeIndex }"
            @click="handlerTabBarClick(item,index)"
        >
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#' + item.icon" />
            </svg>
            {{ item.label }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { TabBarItem } from './types'

const options: TabBarItem[] = [
    { label: "Home", path: "/home", icon: "icon-home" },
    { label: "Explore", path: "/home", icon: "icon-explore" },
    { label: "Cart", path: "/home", icon: "icon-cart" },
    { label: "Favorite", path: "/home", icon: "icon-heart" },
    { label: "Account", path: "/home", icon: "icon-user" },
]

const activeIndex = ref<number>(0);

const handlerTabBarClick = (item: TabBarItem, index: number) => {
    activeIndex.value = index;
}

onMounted(() => {

});

</script>

<style scoped lang="less">
.tab-bar {
    background-color: #fff;
    color: @tabBarUnActiveColor;
    display: flex;
    position: absolute;
    justify-content: space-around;
    width: calc(100% - 2vw);
    bottom: 0;
    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .item-active {
        color: @mainColor;
    }
}
</style>