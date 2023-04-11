import router from "@/router";
import userApi from "@/apps/account/api/user";
const userStore = {
  namespaced: true,
  state() {
    return {
      token: "",
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    updateAdmin(state,payload){
      router.push("/edit/admin/"+payload['ID'])
    },
    deleteUser(state,payload){
      this.commit('table/deleteRow',payload)
    },

  },
  actions:{
   async  deleteUser({commit},payload){
      userApi.deleteUser(payload['ID'])
      commit('deleteUser',payload)
    },

    testAction({commit},payload){
      console.log("run action test")
     commit('testMutation',payload)
    }
  },
  getters: {
    getToken(state) {
      if(state.token=="")
         return localStorage.getItem('token')

      return state.token
    }
  }
}
export default userStore