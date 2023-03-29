<template>
    <TableDashboard :columns="getColsName" :rows="getRows" />
</template>

<script>
import TableDashboard from '@/components/tables/TableDashboard.vue'
export default {
    name: "ListAdmin",
    components: { TableDashboard },
    mounted() {

        this.$store.commit('table/setPath', "user/users")
        this.$store.commit('table/loadData')
    },
    data: function () {
        return {

        }
    },
    computed: {

        getColsName() {

            return [
                {
                    'name': "First Name", 'champ': 'firstName', 'type': "text",
                    "filter": {
                        "placeholder": "First Name",
                        "type": "text",
                        "champ": "first_name",
                        "op": "like"
                    }
                },
                {
                    'name': "Last Name", 'champ': 'lastName', 'type': "text",
                    "filter": {
                        "placeholder": "Last Name",
                        "type": "text",
                        "champ": "last_name",
                        "op": "like"
                    }
                },
                {
                    'name': "Username", 'champ': 'username', 'type': "text",
                    "filter": {
                        "placeholder": "Username",
                        "type": "text",
                        "champ": "username",
                        "op": "like"
                    }
                },
                {
                    'name': "Phone Number", 'champ': 'phoneNumber', 'type': "text",
                    "filter": {
                        "placeholder": "Phone Number",
                        "type": "text",
                        "champ": "phone_number",
                        "op": "like"
                    }
                },
                {
                    'name': "E-mail ", 'champ': 'email', 'type': "text",
                    "filter": {
                        "placeholder": "E-mail",
                        "type": "text",
                        "champ": "email",
                        "op": "like"
                    }
                },
                {
                    'name': "etat",
                    'type': "action",
                    "filter": {
                        "placeholder": "Etat",
                        "type": "select",
                        "champ": "etat",
                        "op": "=",
                        "options": [
                            { "name": "enable", "value": '1' },
                            { "name": "disable", "value": '0' },
                        ]
                    },
                    'actions': [
                        {
                            'name': "toggle",
                            'type': "action",
                            'id': 'ID',
                            'champ': 'etat',
                            'method': 'table/updateEtat',
                            "data":{"path":"user/updateEtat"},

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
                            'type': 'action',
                            'method': 'user/updateAdmin',

                        },
                        {
                            'name': 'delete',
                            'type': 'action',
                            'method': 'user/deleteUser',
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
        onPageChanged(page) {
            this.currentPage = page
        }
    }
}


</script>

