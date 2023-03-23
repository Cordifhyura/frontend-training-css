<template>
    <van-space direction="vertical" size="0.2rem">
        <Nav class="nav-enlarged"></Nav>
        <div>
            <h2>font size</h2>
            <van-slider v-model="settings.size" :min="1" :max="10" />
        </div>
        <div>
            <h2>color mode</h2>
            <van-radio-group v-model="settings.colorScheme">
                <van-space direction="vertical" :size=10>
                    <van-radio name="red">Red</van-radio>
                    <van-radio name="blue">Blue</van-radio>
                    <van-radio name="green">Green</van-radio>
                </van-space>
            </van-radio-group>
        </div>
    </van-space>
</template>

<script setup>
    import Nav from '@/components/Nav.vue';
    import { useUserStore } from '@/store/store';
    
    const userStore = useUserStore();
    const settings = userStore.settings;
</script>

<style lang="scss" scoped>
    
</style>