import router from "@/router";

import roleApi from '@/apps/account/api/role'
const roleStore = {
  namespaced: true,
  state() {
    return {
    }
  },
  mutations: {

    updateRole(state,payload){
      let role=Object.assign({}, payload);
      let options=[]
      payload['backupPriviliges'].forEach((privilige)=>{
        options.push({"name":privilige['privilige'],"value":{"ID":privilige["ID"]}})
      })
      role['priviliges']=options
      this.commit('form/setInitData',role)
      router.push("/edit/role")
    },

    deleteRole(state,payload){
      this.commit('table/deleteRow',payload)
    },

  },
  actions:{
    async deleteRole({commit},payload){
      roleApi.deleteRole(payload['ID'])
      commit('deleteRole',payload)
    },
  },
  getters: {

  }
}
export default roleStore