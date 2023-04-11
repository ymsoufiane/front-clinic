import router from "@/router";


const allergyStore = {
  namespaced: true,
  state() {
    return {
    }
  },
  mutations: {

    updateAllergy(state,payload){
      router.push("/edit/allergy/"+payload['ID'])
    },


  },

}
export default allergyStore