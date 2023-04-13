const patientForm = [
    {
        "label": "Personneles Informations",
        "inputs": [
            { "type": "text", "name": "firstName", "placeholder": "", "title": "First name", "icon": "UserIcon","col":"sm:col-span-5 lg:col-span-10", },
            { "type": "text", "name": "lastName", "placeholder": "", "title": "Last name", "icon": "UserIcon","col":"sm:col-span-5 lg:col-span-10",},
            { "type": "text", "name": "middleName", "placeholder": "", "title": "Middle name", "icon": "UserIcon","col":"sm:col-span-5 lg:col-span-10",},
            { "type": "date", "name": "dateOfBirth", "placeholder": "", "title": "Date of birthday","col":"sm:col-span-5 lg:col-span-10",},
            {
                "type": "select",
                "name": "gender",
                "title": "Select Gender",
                "options": [
                    { "name": "Male", "value": "Male" },
                    { "name": "Female", "value": "Female" },
                    { "name": "Other", "value": "Other" },
                ]
            },
        ]
    },
    {
        "label": "Addresse Information",
        "inputs": [
            { "type": "text", "name": "addresse", "placeholder": "", "title": "Addresse", "icon": "UserIcon","col":"sm:col-span-5 lg:col-span-10", },
            { "type": "text", "name": "city", "placeholder": "", "title": "City", "icon": "UserIcon","col":"sm:col-span-5 lg:col-span-10", },
            { "type": "text", "name": "state", "placeholder": "", "title": "State", "icon": "UserIcon","col":"sm:col-span-5 lg:col-span-10", },
            { "type": "text", "name": "country", "placeholder": "", "title": "Country", "icon": "UserIcon","col":"sm:col-span-5 lg:col-span-10", },
            { "type": "text", "name": "zipCode", "placeholder": "", "title": "Zip code","col":"col-span-full", },
        ]
    },
    {
        "label": "Contact Information",
        "inputs": [
            { "type": "text", "name": "emailAddresse", "placeholder": "", "title": "Email","col":"sm:col-span-5 lg:col-span-10", },

            {
                "type": "select",
                "name": "altPhoneNumber",
                "col":"sm:col-span-2",
                "placeholder": "+212",
                "title": "code",
                "options": [
                    {"name":"+212","value":"+212"},
                    {"name":"+213","value":"+213"},
                    {"name":"+123","value":"+123"},
                ]
            },
            { "type": "text", "name": "phoneNumber", "placeholder": "", "title": "Phone number", "icon": "UserIcon","col":"sm:col-span-3 lg:col-span-8" },
            {
                "type": "select",
                "name": "preferredContactMethod",
                "col":"sm:col-span-5 lg:col-span-10",
                "title": "Select Preferred Contact Method",
                "options": [
                    { "name": "Phone", "value": "Phone" },
                    { "name": "Email", "value": "Email" },
                    { "name": "Text", "value": "Text" },
                ]
            },
            { "type": "text", "name": "emergencyContactName", "value": "", "placeholder": "", "title": "Emergency Contact Name","col":"sm:col-span-5 lg:col-span-10", },
            { "type": "text", "name": "emergencyContactRelationship", "value": "", "placeholder": "", "title": "Emergency Contact Relationship","col":"sm:col-span-5 lg:col-span-10", },
            { "type": "text", "name": "emergencyContactPhoneNumber", "placeholder": "", "title": "Emergency Contact PhoneNumber","col":"sm:col-span-5 lg:col-span-10", },

        ]
    },

    {
        "label": "Insurance Informations",
        "inputs": [
            { "type": "text", "name": "insuranceProvider", "placeholder": "", "title": "Insurance Provider","col":"sm:col-span-5 lg:col-span-10", },
            { "type": "text", "name": "insuranceNumber", "placeholder": "", "title": "Insurance Number","col":"sm:col-span-5 lg:col-span-10", },
            { "type": "text", "name": "insuranceGroupNumber", "placeholder": "", "title": "Insurance Group Number","col":"sm:col-span-5 lg:col-span-10", },
            { "type": "text", "name": "insurancePlanName", "placeholder": "", "title": "Insurance Plan Name","col":"sm:col-span-5 lg:col-span-10", },
        ]
    },
    {
        "label": "Other Informations",
        "inputs": [
            { "type": "text", "name": "primaryCarePhysician", "placeholder": "", "title": "Primary Care Physician","col":"sm:col-span-5 lg:col-span-10", },
            { "type": "text", "name": "referringPhysician", "placeholder": "", "title": "Referring Physician","col":"sm:col-span-5 lg:col-span-10", },
            { "type": "text", "name": "medicalRecordNumber", "placeholder": "", "title": "Medical Record Number","col":"sm:col-span-5 lg:col-span-10", },
            { "type": "text", "name": "socialSecurityNumber", "placeholder": "", "title": "Social Security Number","col":"sm:col-span-5 lg:col-span-10", },

            { "type": "text", "name": "occupation", "placeholder": "", "title": "Occupation","col":"sm:col-span-5 lg:col-span-10", },
            { "type": "text", "name": "employer", "placeholder": "", "title": "Employer", "col":"sm:col-span-5 lg:col-span-10",},
            {
                "type": "select",
                "name": "maritalStatus",
                "title": "Select Marital Status",
                "col":"sm:col-span-5 lg:col-span-10",
                "options": [
                    { "name": "Single", "value": "Single" },
                    { "name": "Married", "value": "Married" },
                    { "name": "Divorced", "value": "Divorced" },
                    { "name": "Widowed", "value": "Widowed" },
                ]
            },
            { "type": "text", "name": "medicalConditions", "placeholder": "", "title": "Medical Conditions","col":"sm:col-span-5 lg:col-span-10", },

            { "type": "text", "name": "pastSurgeries", "placeholder": "", "title": "Past Surgeries","col":"sm:col-span-5 lg:col-span-10", },
            { "type": "text", "name": "familyMedicalHistory", "placeholder": "", "title": "Family Medical History","col":"sm:col-span-5 lg:col-span-10", },
            {
                "type": "select",
                "name": "smokingStatus",
                "title": "Select Smoking Status",
                "col":"sm:col-span-5 lg:col-span-10",
                "options": [
                    { "name": "Never", "value": "Never" },
                    { "name": "Former", "value": "Email" },
                    { "name": "Current", "value": "Current" },
                ]
            },
            {
                "type": "select",
                "name": "alcoholConsumption",
                "col":"sm:col-span-5 lg:col-span-10",
                "title": "Select Alcohol Consumption",
                "options": [
                    { "name": "Never", "value": "Never" },
                    { "name": "Occasional", "value": "Occasional" },
                    { "name": "Regular", "value": "Regular" },
                    { "name": "Heavy", "value": "Heavy" },
                ]
            },
            { "type": "text", "name": "height", "placeholder": "", "title": "Height","col":"sm:col-span-5 lg:col-span-10", },
            { "type": "text", "name": "wight", "placeholder": "", "title": "Wight", "col":"sm:col-span-5 lg:col-span-10",},
            {
                "type": "select",
                "name": "bloodType",
                "title": "Select Blood Type",
                "options": [
                    { "name": "A+", "value": "A+" },
                    { "name": "A-", "value": "A-" },
                    { "name": "B+", "value": "B+" },
                    { "name": "B-", "value": "B-" },
                    { "name": "AB+", "value": "AB+" },
                    { "name": "AB-", "value": "AB-" },
                    { "name": "O+", "value": "O+" },
                    { "name": "O-", "value": "O-" },
                ]
            },
            { "type": "text", "name": "notes", "placeholder": "", "title": "Notes", "col": "col-span-full",},

            { "name": "submit", "type": "submit", "text": "Add Patient" },
        ]
    }


]



export default patientForm