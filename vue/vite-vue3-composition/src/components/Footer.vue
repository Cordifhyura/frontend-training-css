<template>
    <a v-show="!store.isLogin" href="" @click.prevent="()=>router.push('/login')">Login</a>
    <a v-show="store.isLogin" href="" @click.prevent="quit">Logout</a>
    <p>you know you got it!</p>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    import { useUserStore } from '@/store/store';
    import { quit } from '@/pages/login';

    const router = useRouter();
    const store = useUserStore();
</script>

<style lang="scss" scoped>

</style>