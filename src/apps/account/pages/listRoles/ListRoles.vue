<template>
    <TableDashboard :columns="getColsName" :rows="roles" />
</template>

<script>

import TableDashboard from '@/components/tables/TableDashboard.vue'
export default {
    name: "ListRoles",
    components: {TableDashboard },
    mounted() {
        const payload = {
            path: "/role/all"
        }
        this.$store.dispatch('table/loadData', payload)
    },
    data: function () {
        return {
            roles: [
                {
                    "role_name": "role1",
                    "description": "description test bla  ",
                    "priviliges":'prive1,prive2,prive3,...'
                },
                {
                    "role_name": "role1",
                    "description": "description test bla  ",
                    "priviliges":'prive1,prive2,prive3,...'
                },
                {
                    "role_name": "role1",
                    "description": "description test bla  ",
                    "priviliges":'prive1,prive2,prive3,...'
                },
            ]
        }
    },
    computed: {

        getColsName() {
            return [
                { 'name': "Role Name", 'champ': 'role_name', 'type': "text" },
                { 'name': "Description", 'champ': 'description', 'type': "text" },
                { 'name': "Priviliges", 'champ': 'priviliges', 'type': "text" },
                {
                    'name': "Etat",
                    'type': "action",
                    'actions': [
                        {
                            'name': "toggle",
                            'type': "action",
                            'id': 'ID',
                            'champ': 'etat',
                            'method': 'user/testAction',
                            'param': ['ID', 'FirstName'],
                        },
                    ]
                },
                {
                    'name': "Action",
                    'type': "action",
                    "actions": [
                        {
                            'name': 'edit',
                            'type': 'mutation',
                            'method': 'user/testMutation',
                            'param': ['ID', 'first_name'],
                        },
                        {
                            'name': 'delete',
                            'type': 'action',
                            'method': 'user/testAction',
                            'param': ['Id', 'FirstName']
                        },

                    ]
                },



            ]
        },
        getFilter() {
            return {
                "path": "/roles",
                "items": [
                    { "type": "text", "champ": "RoleName", "name": "Role Name", "placeholder": "Search By Role Name ..." },
                ]
            }
        },
    },
    provide() {
        return {
            filter: this.getFilter
        }
    },
    methods: {
        getItem(role) {
            let arr = []
            arr.push(role['role_name'])
            arr.push(role['description'])
            let privs = ""
            role['priviliges'].forEach((priv) => privs += "," + priv['privilige'])
            arr.push(privs)

            return arr;
        }
    }
}


</script>

