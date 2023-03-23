import { createRouter, createWebHashHistory } from 'vue-router';
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Profile from '@/pages/profile.vue';
import Error from "@/pages/Error.vue";
import Settings from '@/pages/Settings.vue';
import { useUserStore } from '@/store/store';

// declare here will trigger defineStore() before pinia initiailized
// const userStore = useUserStore();

const router = createRouter({
    history: createWebHashHistory(), //使用#路由模式
    routes: [
        {
            path: '/',
            name: "Home",
            component: Home,
            // multiple match
            alias: "/home"
        },
        {
            path: '/login',
            name: "Login",
            component: Login
        },
        { path: '/profile', name: "Profile", component: Profile },
        {
            path: '/settings',
            name: "Settings",
            component: Settings
        },
        {
            path: '/:id(.*)*',
            name: "Error",
            component: Error
        }
    ]
});

router.beforeEach((to, from) => {
    const userStore = useUserStore();
    if (
        // Be careful to an infinite redirect
        !userStore.isLogin
        &&
        to.name !== 'Home'
        &&
        to.name !== 'Login'
    ) {
        return { name: 'Home' }
    }
});

export default router;