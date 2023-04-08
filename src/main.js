import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installApp from './plugins/installApp'
import './assets/tailwind.css'
import config from './config'
import store from './store'


const INSTALLED_APPS=[
    'account',
    'patient'
]


const app=createApp(App)
    app.config.globalProperties.config=config
    app.use(installApp,{apps:INSTALLED_APPS,'router':router}).
    use(store).
    use(router).
    mount('#app')

