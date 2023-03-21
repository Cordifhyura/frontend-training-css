import { useUserStore } from '@/store/store';
// declare here will trigger defineStore() before pinia initiailized
// const userStore = useUserStore();

export function login(username,password){
    const userStore = useUserStore();
    // use value within the same block
    userStore.name = username.value;
    userStore.count = 0;
    userStore.isLogin = true;
}

export function quit(){
    const userStore = useUserStore();
    userStore.name = "";
    userStore.count = 0;
    userStore.isLogin = false;
}