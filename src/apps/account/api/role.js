import Api from '@/api';
import error_parse from '@/api/error_parse';

export default {
    async deleteRole(id){
        try {
            const response = await Api.post('/role/delete/'+id)
            return response
        } catch (err) {
            return error_parse(err) 
        }
    },
   
}