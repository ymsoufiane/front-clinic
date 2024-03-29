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
                "icon":"AllergyIcon",
                "isActive": "",
                "link":"",
                "children": [
                    { "name": "Add Allergy", "isActive": "","link":"/add/allergy", },
                    { "name": "List Allergys", "isActive": "","link":"/allergys", },
                ]
            },
            {
                "name": "Gestion Medications",
                "icon":"MedicationIcon",
                "isActive": "",
                "link":"",
                "children": [
                    { "name": "Add Medication", "isActive": "","link":"/add/medication", },
                    { "name": "List Medications", "isActive": "","link":"/medications", },
                ]
            },
            {
                "name": "Gestion Prestation",
                "icon":"PrestationIcon",
                "isActive": "",
                "link":"",
                "children": [
                    { "name": "Add Categorie", "isActive": "","link":"/add/prestation/categorie", },
                    { "name": "List Categories", "isActive": "","link":"/prestation/categories", },
                    { "name": "Add Prestation", "isActive": "","link":"/add/prestation", },
                    { "name": "List Prestations", "isActive": "","link":"/prestations", },
                ]
            },
        ]
    }
]

export { groups }