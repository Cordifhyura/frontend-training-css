<template>
    <header>
        <h1>Come on {{ name }}</h1>
        <a href="">{{ figure }}</a>
        <van-button class="block" v-show="userStore.isLogin" plain type="primary" @click="()=>router.push('/profile')">My Profile</van-button>
        <p>take it!</p>
    </header>
</template>

<script setup>

import { computed } from 'vue';
import { useUserStore } from '@/store/store';
import apis from '@/api/api';
import { useRouter } from 'vue-router';

  const userStore = useUserStore();
  // no log printed, due to browser cache
  console.log(userStore.name);
  const router = useRouter();
  const name = computed(() => 
    userStore.name==""?"Guest":userStore.name
  )
  const figure = computed(() => 
  // use .value for computed properties
    apis.figure+"/"+name.value
  )
</script>
