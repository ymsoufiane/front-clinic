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
      this.commit('form/setInitData',payload)
      router.push("/edit/admin")
    },
    deleteUser(state,payload){
      this.commit('table/deleteRow',payload)
    },

  },
  actions:{
   
    async updateAdmin({commit},payload){
      let data=await userApi.getUser(payload['ID'])
      let options=[]
      data['roles'].forEach(role => {
        options.push({"name":role['roleName'],"value":{"ID":role['ID']}})
      });
      data['roles']=options
      commit("updateAdmin",data)
    },

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