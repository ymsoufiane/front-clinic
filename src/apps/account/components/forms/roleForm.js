const roleForm = [
    { "type": "text", "name": "role_name", "placeholder": "", "title": "Role name", "icon": "UserIcon" },
    { "type": "text", "name": "description", "placeholder": "", "title": "Description", "icon": "UserIcon" },
    {
        "type": "tagInput",
        "name": "priviliges",
        "placeholder": "Select Priviliges",
        "options": [
            { "name": "Privilige1", "value": 1 },
            { "name": "Privilige2", "value": 2 },
            { "name": "Privilige3", "value": 3 },
            { "name": "Privilige4", "value": 4 },

        ]
    },
    { "name":"submit","type": "submit", "text": "Add Role" },
]


export default roleForm