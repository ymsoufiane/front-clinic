<template>
    <TableDashboard :columns="getColsName" :rows="getRows" />
</template>

<script>
import TableDashboard from '@/components/tables/TableDashboard.vue'
import colsTable from '../../json/tables/admin_table.json'
import getAccountTypes from '../../mixin/getAccountTypes';
export default {
    name: "ListAdmin",
    mixins: [getAccountTypes],
    components: { TableDashboard },
    created() {
        colsTable.forEach(async (col) => {
            if (col['name'] == 'type') {
                col['filter']['options'] = await this.getOptionsAccountTypes()
            }
        })
    },
    mounted() {
        this.$store.commit('table/setPath', "accountService/user/users")
        this.$store.commit('table/setPathExportData', "accountService/user/export/")
    },
    data: function () {
        return {

        }
    },
    computed: {

        getColsName() {
            return colsTable
        },

        getRows() {
            let users = this.$store.getters['table/getRows']
            users.forEach((user) => {
                if (user["accountType"])
                    user["accountType"] = user["accountType"]['accountType']
            })
            return users
        },
    },

    methods: {

    }
}


</script>

