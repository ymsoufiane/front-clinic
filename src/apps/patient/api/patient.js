import Api from '@/api';
import error_parse from '@/api/error_parse';

export default {
    async addPatient(patient,callback){
        try {
            await Api.post('/patientService/patient/add', patient)
            callback(null)
        } catch (error) {
            const err=error_parse(error)
            callback(err)
        }
    },
    async updatePatient(patient,callback){
        try {
            await Api.post('/patientService/patient/update', patient)
            callback(null)
        } catch (error) {
            const err=error_parse(error)
            callback(err)
        }
    },
    async getPatient(id,callback){
        try {
            let response=await Api.get('/patientService/patient/'+id)
            callback(null,response.data)
        } catch (error) {
            console.log(error)
            const err=error_parse(error)
            callback(err)
           
        }
    }
}