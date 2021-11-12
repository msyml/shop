<template>
    <div>
        <router-view></router-view>
        <MsymlTabBar></MsymlTabBar>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import MsymlTabBar from '@/components/MsymlTabBar.vue'


onMounted(() => {

});

</script>

<style scoped lang="less">

</style>
