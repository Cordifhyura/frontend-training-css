<!-- options api compatibility -->
<!-- <script>
  import { ref,onMounted,computed } from 'vue';
  import Footer from './components/Footer.vue';
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
    import { useUserStore } from '@/store/store';
    // no need to specify Component structure
    import Header from '@/components/header.vue';
    import Footer from '@/components/Footer.vue';

    const userStore = useUserStore();
    console.log(userStore.count);
    // not working, just a value copy
    // let count = userStore.count;
    const wholeCount = computed(
      () => userStore.count*1000
    );
    const addCount = () => {
      userStore.count++
    }
    
</script>

<template>
  <Header></Header>
  <strong>{{ wholeCount }}</strong>
  <p>{{ userStore.count }}</p>
  <button @click="addCount">take a little bit of my heart</button>
  <div id="test">
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>

// deep styling not working for root node
 :deep(p){
  color: red;
}

</style>
