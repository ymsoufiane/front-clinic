<template>
    <TableDashboard :columns="getColsName" :rows="getRows" />
</template>

<script>
import TableDashboard from '@/components/tables/TableDashboard.vue'
import patientTable from '../../json/tables/patient_table'
export default {
    name: "ListPatients",
    components: { TableDashboard },
    mounted() {
        this.$store.commit('table/setPath', "patientService/patient/patients")
        this.$store.commit('table/setPathExportData',"patientService/patient/export/")
    },
    data: function () {
        return {

        }
    },
    computed: {

        getColsName() {
            return patientTable
        },

        getRows() {
            return this.$store.getters['table/getRows']
        },
    },

    methods: {

    }
}


</script>

