<template>
    <van-button plain type="primary" v-show="!store.isLogin" @click="()=>router.push('/login')">Login</van-button>
    <van-button plain type="primary" v-show="store.isLogin" @click="quit">Logout</van-button>
    <p>you know you got it!</p>
    <!-- v-show not working on vite components -->
    <van-icon name="setting-o" :size=20 :color="store.isLogin?'#666':'#ddd'" @click="()=>{if(store.isLogin){router.push('/settings')}}" />
</template>

<script setup>
    import { useRouter } from 'vue-router';
    import { useUserStore } from '@/store/store';
    import { quit } from '@/api/userService';

    const router = useRouter();
    const store = useUserStore();
</script>
