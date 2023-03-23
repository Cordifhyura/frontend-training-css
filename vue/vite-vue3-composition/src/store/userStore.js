import { ref, reactive } from 'vue';
// refersh-proof
import { useSessionStorage, useLocalStorage } from "@vueuse/core"

export default () => {
  return {
    name: useSessionStorage("name", ref("Guest")),
    count: useSessionStorage("count", ref(0)),
    isLogin: useSessionStorage("isLogin", ref(false)),
    settings: useLocalStorage(
      "settings",
      reactive({ 
        colorScheme: 'red' ,
        size: 5
      })
    )
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