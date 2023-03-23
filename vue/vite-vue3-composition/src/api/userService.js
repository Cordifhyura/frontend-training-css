// 引入封装的axios方法
import { get } from "./request";
// 引入api对象
import api from "./api";
import { useUserStore } from '@/store/store';

// declare here will trigger defineStore() before pinia initiailized
// const userStore = useUserStore();

// 写service代码
/* export const login = (data,callback) => {
    get(api.login,data,callback)
};
 */

export function login(username,password){
    const userStore = useUserStore();
    // use value within the same block
    userStore.name = username.value;
    userStore.count = 0;
    userStore.isLogin = true;
    userStore.settings = {
        colorScheme: 'red' ,
        size: 5
    }
}

export function quit(){
    const userStore = useUserStore();
    userStore.name = "";
    userStore.count = 0;
    userStore.isLogin = false;
    userStore.settings = {
        colorScheme: 'red' ,
        size: 5
    }
}