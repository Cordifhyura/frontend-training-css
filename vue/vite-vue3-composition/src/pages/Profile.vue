<template>
    <van-nav-bar
        class="nav-enlarged"
        title="My profile"
        left-text="Back"
        left-arrow
        @click-left="router.push('/')"
    />
</template>

<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();

</script>

<style lang="scss" scoped>
    
</style>