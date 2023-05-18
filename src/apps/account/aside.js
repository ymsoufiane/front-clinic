const groups = [
    {
        title: "Account",
        items: [
            {
                "name": "Gestion Accounts",
                "isActive": "",
                "icon":"UserIcon",
                "link":"",
                "children": [
                    { "name": "Add User", "isActive": "","link":"/add/admin", },
                    { "name": "List Users", "isActive": "","link":"/users", },
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

]

export { groups }