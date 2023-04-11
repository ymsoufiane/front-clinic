import router from "@/router";


const patientStore = {
  namespaced: true,
  state() {
    return {
    }
  },
  mutations: {

    updatePatient(state,payload){
      router.push("/edit/patient/"+payload['ID'])
    },


  },

}
export default patientStore