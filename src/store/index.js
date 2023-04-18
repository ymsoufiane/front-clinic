import asideStore from './asideStore'
import userStore from './account/userStore'
import tableStore from './tableStore'
import formStore from './formStore';
import roleStore from './account/roleStore';
import patientStore from './patient/patientStore';
import prestationStore from './patient/prestationStore';
import medicationStore from './patient/medicationStore'
import allergyStore from './patient/allergyStore'
import categoriePrestationStore from './patient/categoriePrestationStore';
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
        allergy:allergyStore,
        prestation:prestationStore,
        categoriePrestation:categoriePrestationStore,
    }
})

export default store