import router from "@/router";


const roleStore = {
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
export default roleStore