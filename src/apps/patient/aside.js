const groups = [
    {
        title: "Patient",
        
        items: [
            {
                "name": "Gestion Patients",
                "icon":"PatientIcon",
                "isActive": "",
                "link":"",
                "children": [
                    { "name": "Add Patient", "isActive": "","link":"/add/patient", },
                    { "name": "List Patients", "isActive": "","link":"/patients", },
                ]
            },
            {
                "name": "Gestion Allergy",
                "icon":"PatientIcon",
                "isActive": "",
                "link":"",
                "children": [
                    { "name": "Add Allergy", "isActive": "","link":"/add/allergy", },
                    { "name": "List Allergys", "isActive": "","link":"/allergys", },
                ]
            },
            {
                "name": "Gestion Medications",
                "icon":"PatientIcon",
                "isActive": "",
                "link":"",
                "children": [
                    { "name": "Add Medication", "isActive": "","link":"/add/medication", },
                    { "name": "List Medications", "isActive": "","link":"/medications", },
                ]
            },
        ]
    }
]

export { groups }