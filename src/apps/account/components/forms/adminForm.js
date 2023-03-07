const adminForm = [
    { "type": "text", "name": "first_name", "placeholder": "", "title": "First name", "icon": "UserIcon" },
    { "type": "text", "name": "last_name", "placeholder": "", "title": "Last name", "icon": "UserIcon" },
    { "type": "text", "name": "email", "placeholder": "", "title": "Email", "icon": "UserIcon" },
    { "type": "text", "name": "phone_number", "placeholder": "", "title": "Phone number", "icon": "UserIcon" },
    { "type": "password", "name": "password","value":"", "placeholder": "", "title": "Password", "icon": "UserIcon" },
    { "type": "password", "name": "confirm_password", "placeholder": "", "title": "Confirm password", "icon": "UserIcon" },
    {
        "name":"roles",
        "type": "tagInput",
        "placeholder": "Select Roles",
        "options": [
            { "name": "Role1", "value": 1 },
            { "name": "Role2", "value": 2 },
            { "name": "Role3", "value": 3 },
            { "name": "Role4", "value": 4 },

        ]
    },
    { "name":"submit","type": "submit", "text": "Add User" },

]

export default adminForm