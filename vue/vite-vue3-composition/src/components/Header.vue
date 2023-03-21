<template>
    <h1>Come on {{ name }}</h1>
    <a href="">{{ figure }}</a>
    <p>take it!</p>
</template>

<script setup>

import { computed } from 'vue';
import { useUserStore } from '@/store/store';
import apis from '@/api/api';

  const userStore = useUserStore();
  // no log printed, due to browser cache
  console.log(userStore.name);
  const name = computed(() => 
    userStore.name==""?"Guest":userStore.name
  )
  const figure = computed(() => 
  // use .value for computed properties
    apis.figure+"/"+name.value
  )
</script>

<style lang="scss" scoped>
// inner sytle not working due to browser cache
h1{
  background-color: red;
}

</style>