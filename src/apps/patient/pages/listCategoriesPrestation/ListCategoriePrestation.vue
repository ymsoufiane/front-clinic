<template>
    <TableDashboard :columns="getColsName" :rows="getRows" />
</template>

<script>
import TableDashboard from '@/components/tables/TableDashboard.vue'
import prestationCategorieTable from '../../json/tables/prestationCategorie_table'
export default {
    name: "ListPrestationCategorie",
    components: { TableDashboard },
    mounted() {
        this.$store.commit('table/setPath', "patientService/prestationCategorie/prestationCategories")
        this.$store.commit('table/setPathExportData',"patientService/prestationCategorie/export/")
    },

    computed: {

        getColsName() {
            return prestationCategorieTable
        },

        getRows() {
            return this.$store.getters['table/getRows']
        },
    },

    methods: {

    }
}


</script>

