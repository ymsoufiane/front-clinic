import router from "@/router";

const prestationStore = {
  namespaced: true,
  state() {
    return {
    }
  },
  mutations: {

    updatePrestation(state,payload){
      router.push("/edit/prestation/"+payload['ID'])
    },


  },

}
export default prestationStore