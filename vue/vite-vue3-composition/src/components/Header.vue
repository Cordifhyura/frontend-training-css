<template>
    <h1>Come on {{ name }}</h1>
    <a href="">{{ staticUrl }}</a>
    <p>take it!</p>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue';
import { staticUrl } from '@/api/api';

  let name = ref();
  onMounted(() => {
      name.value = "boy"
    });
</script>

<style lang="scss" scoped>
// inner sytle not working due to browser cache
h1{
  background-color: red;
}

</style>