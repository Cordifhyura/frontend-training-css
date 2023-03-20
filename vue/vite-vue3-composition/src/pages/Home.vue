<!-- options api compatibility -->
<!-- <script>
  import { ref,onMounted,computed } from 'vue';
  import Good from './components/Good.vue';
  export default {
    setup(){
      let name = ref();
      let count = ref(0);
      console.log(count.value);
      const wholeCount = computed(
        () => count.value*1000
      );
      const addCount = () => {
        count.value++
      }
      onMounted(() => {
        name.value = "come on"
      });
      // setup函数里定义的值必须全部返回才能在外部使用
      return {
        name, count, wholeCount, addCount
      }
    },
    components:{
      Good
    }
  }

</script> -->

<script setup>
    
    import { ref, computed, onMounted } from 'vue';
    // no need to specify Component structure
    import Header from '@/components/header.vue';
    import Good from '@/components/Good.vue';

    let count = ref(0);
    console.log(count.value);
    const wholeCount = computed(
      () => count.value*1000
    );
    const addCount = () => {
      count.value++
    }
    
</script>

<template>
  <Header></Header>
  <strong>{{ wholeCount }}</strong>
  <p>{{ count }}</p>
  <button @click="addCount">take a little bit of my heart</button>
  <Good></Good>
</template>

<style lang="scss" scoped>

// deep styling not working
:deep(p){
  color: red;
}

</style>
