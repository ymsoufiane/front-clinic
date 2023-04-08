<template>
    <TableDashboard :columns="getColsName" :rows="getRows" />
</template>

<script>
import TableDashboard from '@/components/tables/TableDashboard.vue'
export default {
    name: "ListPatients",
    components: { TableDashboard },
    mounted() {
        this.$store.commit('table/setPath', "patient/patients")
        this.$store.commit('table/setPathExportData',"patient/export/")
    },
    data: function () {
        return {

        }
    },
    computed: {

        getColsName() {
            return [
                {
                    'name': "First Name", 'champ': 'firstName', 'type': "text",
                    "filter": {
                        "placeholder": "First Name",
                        "type": "text",
                        "champ": "first_name",
                        "op": "like"
                    }
                },
                {
                    'name': "Last Name", 'champ': 'lastName', 'type': "text",
                    "filter": {
                        "placeholder": "Last Name",
                        "type": "text",
                        "champ": "last_name",
                        "op": "like"
                    }
                },
                {
                    'name': "Phone Number", 'champ': 'phoneNumber', 'type': "text",
                    "filter": {
                        "placeholder": "Phone Number",
                        "type": "text",
                        "champ": "phone_number",
                        "op": "like"
                    }
                },

                {
                    'name': "E-mail ", 'champ': 'emailAddresse', 'type': "text",
                    "filter": {
                        "placeholder": "E-mail",
                        "type": "text",
                        "champ": "email",
                        "op": "like"
                    }
                },
                //PreferredContactMethod
                {
                    'name': "Preferred Contact Method ", 'champ': 'preferredContactMethod', 'type': "text",
                    "filter": {
                        "placeholder": "Select ...",
                        "type": "select",
                        "champ": "preferred_contact_method",
                        "op": "=",
                        "options": [
                            { "name": "Phone", "value": "Phone" },
                            { "name": "Email", "value": "Email" },
                            { "name": "Text", "value": "Text" },
                        ]
                    },
                },
                {
                    'name': "Addresse ", 'champ': 'addresse', 'type': "text",
                    "filter": {
                        "placeholder": "Addresse",
                        "type": "text",
                        "champ": "addrese",
                        "op": "like"
                    }
                },
                {
                    'name': "Action",
                    'type': "action",
                    "filter": {},
                    "actions": [
                        {
                            'name': 'edit',
                            'type': 'mutation',
                            'method': 'patient/updatePatient',

                        },

                    ]
                },



            ]
        },

        getRows() {
            return this.$store.getters['table/getRows']
        },
    },

    methods: {

    }
}


</script>

