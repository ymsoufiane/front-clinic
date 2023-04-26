import Api from '@/api';
import error_parse from '@/api/error_parse';

export default {
    async deleteAccountType(id){
        try {
            const response = await Api.post('/accountService/accountType/delete/'+id)
            return response
        } catch (err) {
            return error_parse(err) 
        }
    },
    async addAccountType(accountType,callback){
        try {
            await Api.post('/accountService/accountType/add', accountType)
            callback(null)
        } catch (error) {
            const err=error_parse(error)
            callback(err)
        }
        
    },
    async updateAccountType(accountType,callback){
        try {
            await Api.post('/accountService/accountType/update/' + accountType['ID'], accountType)
            callback(null)
        } catch (error) {
            const err=error_parse(error)
            callback(err)
        }
    }
   
}