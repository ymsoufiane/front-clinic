import Api from '@/api';
import error_parse from '@/api/error_parse';

export default {
    async addCategorie(prestationCategorie,callback){
        try {
            await Api.post('/patientService/prestationCategorie/add', prestationCategorie)
            callback(null)
        } catch (error) {
            const err=error_parse(error)
            callback(err)
        }
    },
    async updateCategorie(prestationCategorie,callback){
        try {
            await Api.post('/patientService/prestationCategorie/update', prestationCategorie)
            callback(null)
        } catch (error) {
            const err=error_parse(error)
            callback(err)
        }
    },
    async getCategorie(id,callback){
        try {
            let response=await Api.get('/patientService/prestationCategorie/'+id)
            callback(null,response.data)
        } catch (error) {
            console.log(error)
            const err=error_parse(error)
            callback(err)
           
        }
    }

}