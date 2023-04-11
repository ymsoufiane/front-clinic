import router from "@/router";


const medicationStore = {
  namespaced: true,
  state() {
    return {
    }
  },
  mutations: {

    updateMedication(state,payload){
      router.push("/edit/medication/"+payload['ID'])
    },


  },

}
export default medicationStore