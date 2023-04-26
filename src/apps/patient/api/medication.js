import Api from '@/api';
import error_parse from '@/api/error_parse';

export default {
    async addMedication(medication,callback){
        try {
            await Api.post('/patientService/medication/add', medication)
            callback(null)
        } catch (error) {
            const err=error_parse(error)
            callback(err)
        }
    },
    async updateMedication(medication,callback){
        try {
            await Api.post('/patientService/medication/update', medication)
            callback(null)
        } catch (error) {
            const err=error_parse(error)
            callback(err)
        }
    },
    async getMedication(id,callback){
        try {
            let response=await Api.get('/patientService/medication/'+id)
            callback(null,response.data)
        } catch (error) {
            console.log(error)
            const err=error_parse(error)
            callback(err)
           
        }
    }
}