import { createApp } from 'vue'
import 'vant/lib/index.css'
import '@/style/style.scss'
import App from '@/App.vue'
import router from '@/router/router'
// import store from '@/store/store'
import { Form, Field, CellGroup, Button } from 'vant';


createApp(App)
    .use(router)
    // .use(store)
        .use(Form)
    .use(Field)
    .use(CellGroup)
    .use(Button)
    .mount('#app')
