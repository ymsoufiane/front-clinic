import asideStore from './asideStore'
import userStore from './account/userStore'
import tableStore from './tableStore'
import formStore from './formStore';
import roleStore from './roleStore';
import patientStore from './patient/patientStore';
import medicationStore from './patient/medicationStore'
import allergyStore from './patient/allergyStore'
import { createStore } from 'vuex'
const store=createStore({
    modules:{
        aside:asideStore,
        user:userStore,
        role:roleStore,
        table:tableStore,
        form:formStore,
        patient:patientStore,
        medication:medicationStore,
        allergy:allergyStore

    }
})

export default store