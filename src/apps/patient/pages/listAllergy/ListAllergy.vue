<template>
    <TableDashboard :columns="getColsName" :rows="getRows" />
</template>

<script>
import TableDashboard from '@/components/tables/TableDashboard.vue'
import allergyTable from '../../json/tables/allergy_table'
export default {
    name: "ListAllergy",
    components: { TableDashboard },
    mounted() {
        this.$store.commit('table/setPath', "patientService/allergy/allergys")
        this.$store.commit('table/setPathExportData',"patientService/allergy/export/")
    },

    computed: {

        getColsName() {
            return allergyTable
        },

        getRows() {
            return this.$store.getters['table/getRows']
        },
    },

    methods: {

    }
}


</script>

