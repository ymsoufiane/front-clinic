import asideStore from './asideStore'
import userStore from './userStore'
import tableStore from './tableStore'
import formStore from './formStore';
import roleStore from './roleStore';
import { createStore } from 'vuex'
const store=createStore({
    modules:{
        aside:asideStore,
        user:userStore,
        role:roleStore,
        table:tableStore,
        form:formStore
    }
})

export default store