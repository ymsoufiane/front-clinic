
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
    testMutation(state,payload){
      console.log("run mutation test")
      console.log(payload)
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