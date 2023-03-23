import { createApp } from 'vue'
import 'vant/lib/index.css'
import '@/style/style.scss'
import App from '@/App.vue'
import router from '@/router/router'
import { createPinia } from 'pinia'
import { Form, Field, Cell, CellGroup, Space, Icon } from 'vant'
import { RadioGroup, Radio, Button, Slider } from 'vant'
import { NavBar } from 'vant';

const store = createPinia();
createApp(App)
    .use(store)
    .use(router)
    .use(Form)
    .use(Field)
    .use(Cell)
    .use(CellGroup)
    .use(Space)
    .use(Icon)
    .use(Button)
    .use(RadioGroup)
    .use(Radio)
    .use(Slider)
    .use(NavBar)
    .mount('#app')
