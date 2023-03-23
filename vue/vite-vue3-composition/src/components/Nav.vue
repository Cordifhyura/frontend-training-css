<!-- todo: make a reuseable Nav, pass title -->
<template>
    <van-nav-bar
        title="I heard that you Settle Down"
        left-text="Back"
        left-arrow
        @click-left="router.push('/')"
        
    />
</template>

<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();
</script>
