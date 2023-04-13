<template>
    <TableDashboard :columns="getColsName" :rows="getRows" />
</template>

<script>
import TableDashboard from '@/components/tables/TableDashboard.vue'
export default {
    name: "ListMedications",
    components: { TableDashboard },
    mounted() {
        this.$store.commit('table/setPath', "patientService/medication/medications")
        this.$store.commit('table/setPathExportData',"patientService/medication/export/")
    },
    data: function () {
        return {

        }
    },
    computed: {

        getColsName() {
            return [
                {
                    'name': "Medication Name", 'champ': 'medicationName', 'type': "text",
                    "filter": {
                        "placeholder": "Medication Name",
                        "type": "text",
                        "champ": "medication_name",
                        "op": "like"
                    }
                },
                {
                    'name': " Description", 'champ': 'description', 'type': "text",
                    "filter": {
                        "placeholder": "Description",
                        "type": "text",
                        "champ": "description",
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
                            'method': 'medication/updateMedication',

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

