import Api from "@/api"
const getPriviliges={
    methods: {
        async getPriviliges() {
            let response = await Api.get("/accountService/priviliges/getAll")
            let priviliges = response.data.Priviliges
            return priviliges
        },
        async getPriviligesFormOptions(){
            let priviliges=await this.getPriviliges()
            let optionsFilter=[]
            priviliges.forEach(privilige => {
                optionsFilter.push({ "name": privilige['Privilige'], "value": privilige["ID"]})
            });
            return optionsFilter
        },
        async getPriviligesFilterOptions(){
            let priviliges=await this.getPriviliges()
            let options=[]
            priviliges.forEach(privilige => {
                options.push({ "name": privilige['Privilige'], "value": {"ID":privilige["ID"]}})
            });
            return options
        }
    },

}

export default getPriviliges