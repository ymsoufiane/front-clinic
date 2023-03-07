<template>
    <TableDashboard :columns="getColsName" :rows="roles" />
    <div class="py-4">
        <PaginationComponent :total-items="totalItems" :items-per-page="itemsPerPage" :current-page="currentPage"
            @page-changed="onPageChanged" />
    </div>
</template>

<script>

import TableDashboard from '@/components/tables/TableDashboard.vue'
import PaginationComponent from '@/components/pagination/PaginationComponent.vue';
export default {
    name: "ListRoles",
    components: { TableDashboard, PaginationComponent },
    mounted() {
        const payload = {
            path: "/role/all"
        }
        this.$store.dispatch('table/loadData', payload)
    },
    data: function () {
        return {
            totalItems: 500,
            itemsPerPage: 10,
            currentPage: 1,
            roles: [
                {
                    "ID": 1,
                    "role_name": "role1",
                    "description": "description test bla  ",
                    "priviliges": 'prive1,prive2,prive3,...'
                },
                {
                    "ID": 2,
                    "role_name": "role1",
                    "description": "description test bla  ",
                    "priviliges": 'prive1,prive2,prive3,...'
                },
                {
                    "ID": 3,
                    "role_name": "role1",
                    "description": "description test bla  ",
                    "priviliges": 'prive1,prive2,prive3,...'
                },
            ]
        }
    },
    computed: {

        getColsName() {
            return [
                {
                    'name': "Role Name",
                    'champ': 'role_name',
                    'type': "text",
                    "filter": {
                        "placeholder":"Role Name",
                        "type": "text",   
                    }
                },
                { 
                    'name': "Description",
                    'champ': 'description',
                    'type': "text" ,
                    "filter": {
                        "placeholder":"Description",
                        "type": "text",   
                    }
                },
                { 
                    'name': "Priviliges",
                    'champ': 'priviliges',
                    'type': "text",
                    "filter": {
                        "placeholder":"Priviliges",
                        "type": "tagInput",
                        "options": [
                            { "name": "priv1", "value": "item1" },
                            { "name": "priv2", "value": "item1" },
                        ]
                    },

                },
                {
                    'name': "Etat",
                    'type': "action",
                    "filter": {
                        "placeholder":"Etat",
                        "type": "select",
                        
                        "options": [
                            { "name": "enable", "value": "item1" },
                            { "name": "disable", "value": "item1" },
                        ]
                    },
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
                    "filter": {},
                    "actions": [
                        {
                            'name': 'edit',
                            'type': 'mutation',
                            'method': 'user/editRole',
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
        },
        onPageChanged(page) {
            this.currentPage = page
        }
    }
}


</script>

