import Api from '@/api';
import error_parse from '@/api/error_parse';

export default {
    async addPrestation(prestation,callback){
        try {
            await Api.post('/accountService/prestation/add', prestation)
            callback(null)
        } catch (error) {
            const err=error_parse(error)
            callback(err)
        }
    },
    async updatePrestation(prestation,callback){
        try {
            await Api.post('/accountService/prestation/update', prestation)
            callback(null)
        } catch (error) {
            const err=error_parse(error)
            callback(err)
        }
    },
    async getPrestation(id,callback){
        try {
            let response=await Api.get('/accountService/prestation/'+id)
            callback(null,response.data)
        } catch (error) {
            console.log(error)
            const err=error_parse(error)
            callback(err)
           
        }
    }
}