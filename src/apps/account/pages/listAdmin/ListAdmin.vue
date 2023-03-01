<template>
    <TableDashboard :columns="getColsName" :rows="getRows" />
</template>

<script>

import TableDashboard from '@/components/tables/TableDashboard.vue'

export default {
    name: "ListAdmin",
    components: { TableDashboard },
    mounted() {
        const payload = {
            path: "/user/all"
        }
        this.$store.dispatch('table/loadData', payload)
    },
    data: function () {
        return {
            users: [
                {
                    'Id': 1,
                    "FirstName": "soufiane",
                    "LastName": "soufiane",
                    "Username": "ysoufiane",
                    "PhoneNumber": "0621500095",
                    "Email": "ymsoufiane@gmail.com",
                    "Description": "description test bla  ",
                    "image": "https://angular-material.fusetheme.com/assets/images/apps/ecommerce/products/watch-05-thumb.jpg",
                    "etat": true
                },
                {
                    'Id': 2,
                    "FirstName": "soufiane",
                    "LastName": "soufiane",
                    "Username": "ysoufiane",
                    "PhoneNumber": "0621500095",
                    "Email": "ymsoufiane@gmail.com",
                    "Description": "description test bla  ",
                    "image": "https://angular-material.fusetheme.com/assets/images/apps/ecommerce/products/watch-05-thumb.jpg",
                    "etat": false
                },
                {
                    'Id': 3,
                    "FirstName": "soufiane",
                    "LastName": "soufiane",
                    "Username": "ysoufiane",
                    "PhoneNumber": "0621500095",
                    "Email": "ymsoufiane@gmail.com",
                    "Description": "description test bla  ",
                    "image": "https://angular-material.fusetheme.com/assets/images/apps/ecommerce/products/watch-05-thumb.jpg",
                    "etat": true
                },


            ]
        }
    },
    computed: {
        getColsName() {

            return [
                // { 'name': "Image ", 'champ': 'image', 'type': "image", "width": "30" },
                { 'name': "First Name", 'champ': 'FirstName', 'type': "text" },
                { 'name': "Last Name", 'champ': 'LastName', 'type': "text" },
                { 'name': "Username", 'champ': 'Username', 'type': "text" },
                { 'name': "Phone Number", 'champ': 'PhoneNumber', 'type': "text" },
                { 'name': "E-mail ", 'champ': 'Email', 'type': "text" },
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
                "path": "/user",
                "items": [
                    { "type": "text", "champ": "FirstName", "name": "First Name", "placeholder": "Search By First Name" },
                    { "type": "text", "champ": "LastName", "name": "Last Name", "placeholder": "Search By Last Name" },
                    { "type": "select", "champ": "Etat", "name": "Etat", "values": ['item1', 'item2'] },
                ]
            }
        },
        getRows() {
            return this.$store.getters['table/getCols']
        },
    },
    provide() {
        return {
            filter: this.getFilter
        }
    },
    methods: {

    }
}


</script>

