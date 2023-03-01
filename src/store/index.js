import asideStore from './asideStore'
import userStore from './userStore'
import tableStore from './tableStore'
import { createStore } from 'vuex'
const store=createStore({
    modules:{
        aside:asideStore,
        user:userStore,
        table:tableStore
    }
})

export default store