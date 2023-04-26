import Api from '@/api';
import router from "@/router";
import store from "@/store";
import error_parse from '@/api/error_parse';
export default {
    async login(user) {
        try {
            const response = await Api.post('/accountService/user/login', user)
            const token = response.data.Token
            localStorage.setItem('token', token)
            localStorage.setItem('username',user['username'])
            store.commit("user/setToken", token)    
            router.push("/dashboard")
            return {}
        } catch (err) {
            return error_parse(err) 
        }

    },
    async deleteUser(id){
        try {
            const response = await Api.post('/accountService/user/delete/'+id)
            return response
        } catch (err) {
            return error_parse(err) 
        }
    },
    
    async getUser(id){
        try {
            const response = await Api.get('/accountService/user/'+id)
            return response.data.user
        } catch (err) {
            return error_parse(err) 
        }
    },
    async addUser(user,callback){
        try {
            await Api.post('/accountService/user/add', user)
            callback(null)
        } catch (error) {
            const err=error_parse(error)
            callback(err)
        }
        
    },
    async updateUser(user,callback){
        try {
            await Api.post('/accountService/user/update/' + user['ID'], user)
            callback(null)
        } catch (error) {
            const err=error_parse(error)
            callback(err)
        }
    }


}