import Api from '@/api';
import error_parse from '@/api/error_parse';

export default {
    async addAllergy(allergy,callback){
        try {
            await Api.post('/patientService/allergy/add', allergy)
            callback(null)
        } catch (error) {
            const err=error_parse(error)
            callback(err)
        }
    },
    async updateAllergy(allergy,callback){
        try {
            await Api.post('/patientService/allergy/update', allergy)
            callback(null)
        } catch (error) {
            const err=error_parse(error)
            callback(err)
        }
    },
    async getAllergy(id,callback){
        try {
            let response=await Api.get('/patientService/allergy/'+id)
            callback(null,response.data)
        } catch (error) {
            console.log(error)
            const err=error_parse(error)
            callback(err)
           
        }
    }
}