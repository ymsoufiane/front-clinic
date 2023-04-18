import Api from "@/api";
const getRoles={
    methods: {
        async getOptions (){
            let response=await Api.get("/accountService/role/getAll")
            let roles=response.data.roles
            let options=[]
            roles.forEach(role => {
                options.push({"name":role['roleName'],"value":{"ID":role["ID"]}})
            });
            return options
        }
    },
}
export default getRoles