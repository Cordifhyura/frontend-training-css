import { createApp } from 'vue'
import './style/style.scss'
import App from './App.vue'
import router from "./router/router";
import 'vant/lib/index.css';
import { Form, Field, CellGroup, Button } from 'vant';

createApp(App) 
    .use(router)
    // 引入vant组件，use方法注入后才能使用
    .use(Form)
    .use(Field)
    .use(CellGroup)
    .use(Button)
    .mount('#app')
