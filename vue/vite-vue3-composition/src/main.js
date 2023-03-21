import { createApp } from 'vue'
import 'vant/lib/index.css'
import '@/style/style.scss'
import App from '@/App.vue'
import router from '@/router/router'
import { createPinia } from 'pinia'
import { Form, Field, CellGroup, Button } from 'vant'

const store = createPinia();
createApp(App)
    .use(router)
    .use(store)
    .use(Form)
    .use(Field)
    .use(CellGroup)
    .use(Button)
    .mount('#app')
