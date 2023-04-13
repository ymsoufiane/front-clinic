import Api from "@/api"
let optionsFilter = []
let options =[]
async function getOptions() {
    let response = await Api.get("/accountService/priviliges/getAll")
    let priviliges = response.data.Priviliges

    priviliges.forEach(privilige => {
        optionsFilter.push({ "name": privilige['Privilige'], "value": privilige["ID"]})
        options.push({ "name": privilige['Privilige'], "value": {"ID":privilige["ID"]}})
    });
    return options
}
getOptions()
const roleForm = [
    { "type": "text", "name": "roleName", "placeholder": "", "title": "Role name", "icon": "UserIcon" },
    { "type": "text", "name": "description", "placeholder": "", "title": "Description", "icon": "UserIcon" },
    {
        "type": "tagInput",
        "name": "priviliges",
        "placeholder": "Select Priviliges",
        "options": options
    },
    { "name": "submit", "type": "submit", "text": "Add Role" },
]


const tableCols = [
    {
        'name': "Role Name",
        'champ': 'roleName',
        'type': "text",
        "filter": {
            "placeholder": "Role Name",
            "type": "text",
            "champ": "roles.role_name",
            "op": "like"
        }
    },
    {
        'name': "Description",
        'champ': 'description',
        'type': "text",
        "filter": {
            "placeholder": "Description",
            "type": "text",
            "champ": "roles.description",
            "op": "like"
        }
    },
    {
        'name': "Priviliges",
        'champ': 'priviliges',
        'type': "text",
        "filter": {
            "placeholder": "Priviliges",
            "type": "tagInput",
            "champ": "priviliges",
            "isCustomFilter":true,
            "op": "=",
            "options": optionsFilter
        },

    },
    {
        'name': "Etat",
        'type': "action",
        "filter": {
            "placeholder": "Etat",
            "type": "select",
            "champ":"roles.etat",
            "op":"=",
            "options": [
                { "name": "enable", "value": 1 },
                { "name": "disable", "value": 0 },
            ]
        },
        'actions': [
            {
                'name': "toggle",
                'type': "action",
                'id': 'ID',
                'champ': 'etat',
                'method': 'table/updateEtat',
                "data":{"path":"/accountService/role/updateEtat"}
            },
        ]
    },
    {
        'name': "Action",
        'type': "action",
        "filter": {},
        "actions": [
            {
                'name': 'edit',
                'type': 'mutation',
                'method': 'role/updateRole',
            },
            {
                'name': 'delete',
                'type': 'action',
                'method': 'role/deleteRole',
            },

        ]
    },



]


export default { roleForm, tableCols }

