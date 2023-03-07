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
                { 
                    'name': "First Name", 'champ': 'FirstName', 'type': "text" ,
                    "filter": {
                        "placeholder":"First Name",
                        "type": "text",   
                    }
                },
                {
                     'name': "Last Name", 'champ': 'LastName', 'type': "text",
                     "filter": {
                        "placeholder":"Last Name",
                        "type": "text",   
                    }
                },
                { 
                    'name': "Username", 'champ': 'Username', 'type': "text",
                    "filter": {
                        "placeholder":"Username",
                        "type": "text",   
                    }
                },
                { 
                    'name': "Phone Number", 'champ': 'PhoneNumber', 'type': "text",
                    "filter": {
                        "placeholder":"Phone Number",
                        "type": "text",   
                    }
                },
                { 
                    'name': "E-mail ", 'champ': 'Email', 'type': "text",
                    "filter": {
                        "placeholder":"E-mail",
                        "type": "text",   
                    }
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
                    "filter":{},
                    "actions": [
                        {
                            'name': 'edit',
                            'type': 'mutation',
                            'method': 'user/editAdmin',
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

        getRows() {
            return this.$store.getters['table/getCols']
        },
    },

    methods: {
        onPageChanged(page){
            this.currentPage=page
        }
    }
}


</script>

