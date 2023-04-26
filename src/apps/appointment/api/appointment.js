import Api from '@/api';
import error_parse from '@/api/error_parse';

export default {
    async addAppointment(appointment,callback){
        try {
            await Api.post('/appointmentService/appointment/add', appointment)
            callback(null)
        } catch (error) {
            const err=error_parse(error)
            callback(err)
        }
    },
    async updateAppointment(appointment,callback){
        try {
            await Api.post('/appointmentService/appointment/update', appointment)
            callback(null)
        } catch (error) {
            const err=error_parse(error)
            callback(err)
        }
    },
    async getAppointment(id,callback){
        try {
            let response=await Api.get('/appointmentService/appointment/'+id)
            callback(null,response.data)
        } catch (error) {
            console.log(error)
            const err=error_parse(error)
            callback(err)
           
        }
    }
}