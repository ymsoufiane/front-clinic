const groups = [
    {
        title: "Account",
        items: [
            {
                "name": "Gestion Account",
                "isActive": "active",
                "icon":"UserIcon",
                "link":"",
                "children": [
                    { "name": "Add Admin", "isActive": "","link":"/add/admin", },
                    { "name": "List Admin", "isActive": "","link":"/users", },
                ]
            },
            {
                "name": "Gestion Roles",
                "icon":"TaskIcon",
                "isActive": "",
                "link":"",
                "children": [
                    { "name": "Add Role", "isActive": "","link":"/add/role", },
                    { "name": "List Roles", "isActive": "","link":"/roles", },
                ]
            },
        ],
    },
    {
        title: "Appointment",
        
        items: [
            {
                "name": "Appointment",
                "icon":"Appointment",
                "isActive": "",
                "link":"/user",
                "children": [ ]
            },
        ]
    }
]

export { groups }