import Api from "@/api";
const getAccountTypes={
    methods: {
        async getOptionsAccountTypes(){
            let response=await Api.get("accountService/accountType/all")
            let accountTypes=response.data
            let options=[]
            accountTypes.forEach((accountType)=>{
                options.push({"name":accountType['accountType'],"value":accountType['ID']})
            })
            return options
        }
    },
}

export default getAccountTypes