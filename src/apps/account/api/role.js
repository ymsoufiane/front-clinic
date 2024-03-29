import Api from '@/api';
import error_parse from '@/api/error_parse';

export default {
    async deleteRole(id){
        try {
            const response = await Api.post('/accountService/role/delete/'+id)
            return response
        } catch (err) {
            return error_parse(err) 
        }
    },
    async addRole(role,callback){
        try {
            await Api.post('/accountService/role/add', role)
            callback(null)
        } catch (error) {
            const err=error_parse(error)
            callback(err)
        }
        
    },
    async updateRole(role,callback){
        try {
            await Api.post('/accountService/role/update/' + role['ID'], role)
            callback(null)
        } catch (error) {
            const err=error_parse(error)
            callback(err)
        }
    }
   
}