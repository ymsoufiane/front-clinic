const patientForm = [
    {"type":"sectionTitle","title":"Personneles Informations","isFirst":true},
    { "type": "text", "name": "firstName", "placeholder": "", "title": "First name", "icon": "UserIcon","col":"lg:col-span-4 sm:col-span-5" },
    { "type": "text", "name": "lastName", "placeholder": "", "title": "Last name", "icon": "UserIcon","col":"lg:col-span-4 sm:col-span-5" },
    { "type": "text", "name": "middleName", "placeholder": "", "title": "Middle name", "icon": "UserIcon","col":"lg:col-span-4 sm:col-span-5" },
    { "type": "date", "name": "dateOfBirth", "placeholder": "", "title": "Date of birthday","col":"lg:col-span-4 sm:col-span-5" },
    { 
        "type": "select",
        "name": "gender", 
        "title": "Select Gender",
        "col":"lg:col-span-4 sm:col-span-5",
        "options":[
            {"name":"Male","value":"Male"},
            {"name":"Female","value":"Female"},
            {"name":"Other","value":"Other"},
        ] 
    },
    {"type":"sectionTitle","title":"Addresse Information"},
    { "type": "text", "name": "addresse", "placeholder": "", "title": "Addresse", "icon": "UserIcon","col":"lg:col-span-4 sm:col-span-5", },
    { "type": "text", "name": "city", "placeholder": "", "title": "City", "icon": "UserIcon","col":"lg:col-span-4 sm:col-span-5", },
    { "type": "text", "name": "state", "placeholder": "", "title": "State", "icon": "UserIcon","col":"lg:col-span-4 sm:col-span-5", },
    { "type": "text", "name": "country", "placeholder": "", "title": "Country", "icon": "UserIcon","col":"lg:col-span-4 sm:col-span-5", },
    { "type": "text", "name": "zipCode", "placeholder": "", "title": "Zip code","col":"lg:col-span-4 sm:col-span-5", },
    {"type":"sectionTitle","title":"Contact Information"},
    { "type": "text", "name": "emailAddresse", "placeholder": "", "title": "Email","col":"lg:col-span-6 sm:col-span-4", },
    { "type": "text", "name": "altPhoneNumber", "placeholder": "+212", "title": "code","col":"col-span-2", },
    { "type": "text", "name": "phoneNumber", "placeholder": "", "title": "Phone number", "icon": "UserIcon","col":"lg:col-span-6 sm:col-span-4", },
    { 
        "type": "select", 
        "name": "preferredContactMethod", 
        "col":"lg:col-span-6 sm:col-span-5",
        "title": "Select Preferred Contact Method", 
        "options":[
            {"name":"Phone","value":"Phone"},
            {"name":"Email","value":"Email"},
            {"name":"Text","value":"Text"},
        ]
    },
    { "type": "text", "name": "emergencyContactName","value":"", "placeholder": "", "title": "Emergency Contact Name","col":"lg:col-span-7 sm:col-span-5", },
    { "type": "text", "name": "emergencyContactRelationship","value":"", "placeholder": "", "title": "Emergency Contact Relationship","col":"lg:col-span-7 sm:col-span-5", },
    { "type": "text", "name": "emergencyContactPhoneNumber", "placeholder": "", "title": "Emergency Contact PhoneNumber","col":"lg:col-span-6 sm:col-span-5", },

    {"type":"sectionTitle","title":"Insurance Informations"},
    { "type": "text", "name": "insuranceProvider", "placeholder": "", "title": "Insurance Provider","col":"col-span-5", },
    { "type": "text", "name": "insuranceNumber", "placeholder": "", "title": "Insurance Number","col":"col-span-5", },
    { "type": "text", "name": "insuranceGroupNumber", "placeholder": "", "title": "Insurance Group Number","col":"col-span-5", },
    { "type": "text", "name": "insurancePlanName", "placeholder": "", "title": "Insurance Plan Name","col":"col-span-5", },
    {"type":"sectionTitle","title":"Other Informations"},
    { "type": "text", "name": "primaryCarePhysician", "placeholder": "", "title": "Primary Care Physician","col":"col-span-5" },
    { "type": "text", "name": "referringPhysician", "placeholder": "", "title": "Referring Physician","col":"col-span-5"},
    { "type": "text", "name": "medicalRecordNumber", "placeholder": "", "title": "Medical Record Number","col":"col-span-5" },
    { "type": "text", "name": "socialSecurityNumber", "placeholder": "", "title": "Social Security Number","col":"col-span-5" },

    { "type": "text", "name": "occupation", "placeholder": "", "title": "Occupation","col":"col-span-5" },
    { "type": "text", "name": "employer", "placeholder": "", "title": "Employer","col":"col-span-5" },
    { 
        "type": "select", 
        "name": "maritalStatus", 
        "title": "Select Marital Status",
        "col":"col-span-5" ,
        "options":[
            {"name":"Single","value":"Single"},
            {"name":"Married","value":"Married"},
            {"name":"Divorced","value":"Divorced"},
            {"name":"Widowed","value":"Widowed"},
        ]
    },
    { "type": "text", "name": "medicalConditions", "placeholder": "", "title": "Medical Conditions","col":"col-span-5" },

    { "type": "text", "name": "pastSurgeries", "placeholder": "", "title": "Past Surgeries","col":"col-span-5" },
    { "type": "text", "name": "familyMedicalHistory", "placeholder": "", "title": "Family Medical History","col":"col-span-5" },
    { 
        "type": "select", 
        "col":"col-span-5",
        "name": "smokingStatus", 
        "title": "Select Smoking Status", 
        "options":[
            {"name":"Never","value":"Never"},
            {"name":"Former","value":"Email"},
            {"name":"Current","value":"Current"},
        ]
    },
    { 
        "type": "select", 
        "name": "alcoholConsumption", 
        "col":"col-span-5",
        "title": "Select Alcohol Consumption", 
        "options":[
            {"name":"Never","value":"Never"},
            {"name":"Occasional","value":"Occasional"},
            {"name":"Regular","value":"Regular"},
            {"name":"Heavy","value":"Heavy"},
        ]
    },
    { "type": "text", "name": "height", "placeholder": "", "title": "Height","col":"col-span-5" },
    { "type": "text", "name": "wight", "placeholder": "", "title": "Wight" ,"col":"col-span-5"},
    { 
        "type": "select", 
        "name": "bloodType", 
        "col":"col-span-5",
        "title": "Select Blood Type", 
        "options":[
            {"name":"A+","value":"A+"},
            {"name":"A-","value":"A-"},
            {"name":"B+","value":"B+"},
            {"name":"B-","value":"B-"},
            {"name":"AB+","value":"AB+"},
            {"name":"AB-","value":"AB-"},
            {"name":"O+","value":"O+"},
            {"name":"O-","value":"O-"},
        ]
    },
    { "type": "date", "name": "dateOfLastVisit", "placeholder": "", "title": "Date Of Last Visit","col":"col-span-5" },
    { "type": "text", "name": "notes", "placeholder": "", "title": "Notes","col":"col-span-full" },
    
    { "name":"submit","type": "submit", "text": "Add Patient" },


]



export default patientForm