<template>
    <TableDashboard :columns="getColsName" :rows="getRows" />
</template>

<script>
import TableDashboard from '@/components/tables/TableDashboard.vue'
import medicationTable from '../../json/tables/medication_table'
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
            return medicationTable
        },

        getRows() {
            return this.$store.getters['table/getRows']
        },
    },

    methods: {

    }
}


</script>

