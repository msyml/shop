<template>
    <div>
        <router-view></router-view>
        <TabBar></TabBar>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import TabBar from '@/components/TabBar.vue'


onMounted(() => {

});

</script>

<style scoped lang="less">

</style>
