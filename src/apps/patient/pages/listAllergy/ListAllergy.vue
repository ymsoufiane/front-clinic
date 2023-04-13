<template>
    <TableDashboard :columns="getColsName" :rows="getRows" />
</template>

<script>
import TableDashboard from '@/components/tables/TableDashboard.vue'
export default {
    name: "ListAllergy",
    components: { TableDashboard },
    mounted() {
        this.$store.commit('table/setPath', "patientService/allergy/allergys")
        this.$store.commit('table/setPathExportData',"patientService/allergy/export/")
    },
    data: function () {
        return {

        }
    },
    computed: {

        getColsName() {
            return [
                {
                    'name': "Allergy Name", 'champ': 'allergyName', 'type': "text",
                    "filter": {
                        "placeholder": "Allergy Name",
                        "type": "text",
                        "champ": "allergy_name",
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
                            'method': 'allergy/updateAllergy',

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

