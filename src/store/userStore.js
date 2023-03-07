import router from "@/router";
const userStore = {
  namespaced: true,
  state() {
    return {
      token: ""
    }
  },
  mutations: {
    setToken(state, token) {

      state.token = token
    },

    editAdmin(state,payload){
      console.log(payload)
      router.push("/edit/admin")
    },
    editRole(state,payload){
      console.log(payload)
      router.push("/edit/role")
    }

  },
  actions:{
    testAction({commit},payload){
      console.log("run action test")
     commit('testMutation',payload)
    }
  },
  getters: {
    getToken(state) {
      if(state.token=="")
        state.token=localStorage.getItem('token')
      return state.token
    }
  }
}
export default userStore