<template>
    <TableDashboard :columns="getColsName" :rows="getRows" />
</template>

<script>
import TableDashboard from '@/components/tables/TableDashboard.vue'
import headerTable from '../../json/tables/admin_table.json'
export default {
    name: "ListAdmin",
    components: { TableDashboard },
    mounted() {
        this.$store.commit('table/setPath', "accountService/user/users")
        this.$store.commit('table/setPathExportData',"accountService/user/export/")
    },
    data: function () {
        return {

        }
    },
    computed: {

        getColsName() {
            return headerTable
        },

        getRows() {
            return this.$store.getters['table/getRows']
        },
    },

    methods: {
       
    }
}


</script>

