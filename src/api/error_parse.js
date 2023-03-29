import router from "@/router";

export default function(err){
    if (err.response==null) {
        router.push("/error_network")
    } 
    else if(err.response.status==401){
        router.push("/unauthorized")
    }
    else if(err.response.status==500){
        router.push("/internalError")
    }
    else if(err.response.status==404){
        router.push("/notFound")
    }
    const arrErrValidation = err.response.data.ErrValidation
    const errorUniqueField=err.response.data.ErrorUniqueField
    const result = {}
    if (arrErrValidation != null)
        arrErrValidation.forEach(err => {
            result[err.Name] = err.Validator
        });
    if(errorUniqueField!=null){
        errorUniqueField.forEach(err => {
           result[err.Name] = err.Message
        });
    }
    result["err"] = err.response.data.Err
    return result
}