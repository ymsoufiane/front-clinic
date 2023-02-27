import Api from "../../../api";
import router from "@/router";
import store from "@/store";
export default  {
    async login(user){
        try{
            const response=await Api.post('/user/login',user)
            const token =response.data.Token
            if(user.remember)
                    localStorage.setItem('token', token)
                    store.user.commit("setToken",token)
            router.push("/dashboard")
            return {}
        }catch(err){
            const arrErrValidation=err.response.data.ErrValidation
            const result={}
            if (arrErrValidation!=null)
                arrErrValidation.forEach(err => {
                    result[err.Name]=err.Validator
                });
            result["err"]=err.response.data.Err
            return result
        }
        
        
    }
}