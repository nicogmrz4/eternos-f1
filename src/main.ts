import './assets/main.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { IoPerson, IoShield, IoCalendarSharp } from "oh-vue-icons/icons";

addIcons(IoPerson, IoShield, IoCalendarSharp);

const app = createApp(App)
app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
