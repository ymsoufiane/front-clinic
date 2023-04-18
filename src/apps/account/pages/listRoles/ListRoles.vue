<template>
    <TableDashboard :columns="getColsName" :rows="getRows" />
</template>

<script>

import TableDashboard from '@/components/tables/TableDashboard.vue'
import tableCols from '../../json/tables/role_table.json'
import getPriviliges from '../../mixin/getPriviligesOptions';

export default {
    name: "ListRoles",
    mixins:[getPriviliges],
    components: { TableDashboard },
    created(){
        tableCols.forEach(async(col)=>{
            if(col['name']=='Priviliges'){
                col['filter']['options']=await this.getPriviligesFilterOptions()
            }
        })
    },
    mounted() {
        this.$store.commit('table/setPath', "accountService/role/roles")
    },
    data: function () {
        return {
        }
    },
    computed: {
        getRows() {
            let roles = this.$store.getters['table/getRows']
            if (roles != null)
                roles.forEach((role) => {
                    if (typeof role['priviliges'] != "string") {
                        role['backupPriviliges'] = role['priviliges']
                        role['priviliges'] = this.parsePriviliges(role['priviliges'])
                    }

                })
            else
                roles = []

            return roles
        },

        getColsName() {
            return tableCols
        },

    },

    methods: {
        parsePriviliges(priviliges) {

            if (!priviliges) return ""

            if (typeof priviliges === "string") return priviliges

            let priviligesStr = ""
            priviliges.forEach((privilige) => {
                if (priviligesStr.length < 30)
                    priviligesStr += "," + privilige['privilige']
                else {
                    priviligesStr += "..."
                    return priviligesStr
                }
            })
            return priviligesStr
        },


    }
}


</script>

