import { ref } from 'vue';
import { useLocalStorage } from "@vueuse/core"

export default () => {
  return {
    name: useLocalStorage("name", ref("Guest")),
    count: useLocalStorage("count", ref(0)),
    isLogin: useLocalStorage("isLogin", ref(false))
  }
}


// option store
/* export default {
    state: () => ({ count: 0, name: 'Eduardo' }),
    getters: {
      doubleCount: (state) => state.count * 2,
    },
    actions: {
      increment() {
        this.count++
      },
    },
  } */