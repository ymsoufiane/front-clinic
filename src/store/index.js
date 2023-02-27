import asideStore from './asideStore'
import userStore from './userStore'
import { createStore } from 'vuex'
const store=createStore({
    modules:{
        aside:asideStore,
        user:userStore
    }
})

export default store