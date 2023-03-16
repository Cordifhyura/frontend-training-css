import { createRouter,createWebHashHistory } from 'vue-router';
import Home  from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Error from "../pages/Error.vue";

const router = createRouter({
    history: createWebHashHistory(), //使用#路由模式
    routes : [
        { 
            path: '/', 
            name: "home",
            component: Home
        },
        { 
            path: '/login', 
            name: "login",
            component: Login
        },{ 
            path: '/:id(.*)*', 
            name: "404",
            component: Error
        }
    ]
});

export default router;