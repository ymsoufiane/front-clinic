import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installApp from './plugins/installApp'
import './assets/tailwind.css'
import config from './config'
import store from './store'
import VueApexCharts from "vue3-apexcharts";


const INSTALLED_APPS=[
    'account',
    'patient',
    'appointment'
]


const app=createApp(App)
    app.config.globalProperties.config=config
    app.use(installApp,{apps:INSTALLED_APPS,'router':router}).
    use(store).
    use(router).
    use(VueApexCharts).
    mount('#app')

