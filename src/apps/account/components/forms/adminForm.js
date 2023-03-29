import Api from "@/api"
let options=[]
async function getOptions (){
    let response=await Api.get("/role/getAll")
    let roles=response.data.roles
    
    roles.forEach(role => {
        options.push({"name":role['roleName'],"value":{"ID":role["ID"]}})
    });
    return options
}
getOptions()
const adminForm = [
    { "type": "text", "name": "firstName", "placeholder": "", "title": "First name", "icon": "UserIcon" },
    { "type": "text", "name": "lastName", "placeholder": "", "title": "Last name", "icon": "UserIcon" },
    { "type": "text", "name": "email", "placeholder": "", "title": "Email", "icon": "UserIcon" },
    { "type": "text", "name": "phoneNumber", "placeholder": "", "title": "Phone number", "icon": "UserIcon" },
    { "type": "text", "name": "username", "placeholder": "", "title": "Username", "icon": "UserIcon","col":"col-span-full" },
    { "type": "password", "name": "password","value":"", "placeholder": "", "title": "Password", "icon": "UserIcon" },
    { "type": "password", "name": "ConfirmPassword", "placeholder": "", "title": "Confirm password", "icon": "UserIcon" },
    {
        "name":"roles",
        "type": "tagInput",
        "placeholder": "Select Roles",
        "options":options
    },
    { "name":"submit","type": "submit", "text": "Add User" },

]



export default adminForm