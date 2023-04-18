import router from "@/router";

const categoriePrestationStore = {
  namespaced: true,
  state() {
    return {
    }
  },
  mutations: {

    updateCategoriePrestation(state,payload){
      router.push("/edit/prestation/categorie/"+payload['ID'])
    },


  },

}
export default categoriePrestationStore