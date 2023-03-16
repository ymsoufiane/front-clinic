<template>
    <TableDashboard :columns="getColsName" :rows="getRows" />

</template>

<script>
import TableDashboard from '@/components/tables/TableDashboard.vue'
export default {
    name: "ListAdmin",
    components: { TableDashboard },
    mounted() {
        
        this.$store.commit('table/setPath',"user/users")
        this.$store.commit('table/loadData')
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
                { 
                    'name': "First Name", 'champ': 'FirstName', 'type': "text" ,
                    "filter": {
                        "placeholder":"First Name",
                        "type": "text",   
                        "champ":"first_name",
                        "op":"like"
                    }
                },
                {
                     'name': "Last Name", 'champ': 'LastName', 'type': "text",
                     "filter": {
                        "placeholder":"Last Name",
                        "type": "text",  
                        "champ":"last_name",
                        "op":"like"
                    }
                },
                { 
                    'name': "Username", 'champ': 'Username', 'type': "text",
                    "filter": {
                        "placeholder":"Username",
                        "type": "text",
                        "champ":"username",
                        "op":"like"
                    }
                },
                { 
                    'name': "Phone Number", 'champ': 'PhoneNumber', 'type': "text",
                    "filter": {
                        "placeholder":"Phone Number",
                        "type": "text", 
                        "champ":"phone_number",
                        "op":"like"
                    }
                },
                { 
                    'name': "E-mail ", 'champ': 'Email', 'type': "text",
                    "filter": {
                        "placeholder":"E-mail",
                        "type": "text",  
                        "champ":"email",
                        "op":"like"
                    }
                },
                {
                    'name': "Etat",
                    'type': "action",
                    "filter": {
                        "placeholder":"Etat",
                        "type": "select", 
                        "champ":"etat",
                        "op":"=",
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
            return this.$store.getters['table/getRows']
        },
    },

    methods: {
        onPageChanged(page){
            this.currentPage=page
        }
    }
}


</script>

