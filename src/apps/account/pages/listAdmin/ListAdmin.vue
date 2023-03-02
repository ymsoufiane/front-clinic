<template>
    <TableDashboard :columns="getColsName" :rows="getRows" />
    <div class="py-4">
        <PaginationComponent :total-items="totalItems" :items-per-page="itemsPerPage" :current-page="currentPage"
            @page-changed="onPageChanged" />
    </div>
</template>

<script>

import TableDashboard from '@/components/tables/TableDashboard.vue'
import PaginationComponent from '@/components/pagination/PaginationComponent.vue';
export default {
    name: "ListAdmin",
    components: { TableDashboard,PaginationComponent },
    mounted() {
        const payload = {
            path: "/user/all"
        }
        this.$store.dispatch('table/loadData', payload)
    },
    data: function () {
        return {
            totalItems:500,
            itemsPerPage:10,
            currentPage:1,
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
                    { "type": "text", "champ": "FirstName", "name": "First Name", "placeholder": "First Name..." },
                    { "type": "text", "champ": "LastName", "name": "Last Name", "placeholder": "Last Name..." },
                    { "type": "select", "champ": "Etat", "name": "Etat","placeholder":"Select Etat ...", "values": ['item1', 'item2'] },
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
        onPageChanged(page){
            this.currentPage=page
        }
    }
}


</script>

