<template>
    <LineTable class="font-medium" :items="getColsName" />
    <LineTable v-for="(item, index) in roles" :key="index" class="my-2" :items="getItem(item)" />
</template>

<script>

import LineTable from '../../components/tables/LineTable.vue';
export default {
    name: "ListRoles",
    components: { LineTable },
    data: function () {
        return {
            roles: [
                {
                    "role_name": "role1",
                    "description": "description test bla  ",
                    "priviliges": [
                        { "privilige": "priv1" },
                        { "privilige": "priv2" }
                    ]
                },
                {
                    "role_name": "role1",
                    "description": "description test bla  ",
                    "priviliges": [
                        { "privilige": "priv1" },
                        { "privilige": "priv2" }
                    ]
                },
                {
                    "role_name": "role1",
                    "description": "description test bla  ",
                    "priviliges": [
                        { "privilige": "priv1" },
                        { "privilige": "priv2" }
                    ]
                },
            ]
        }
    },
    computed: {
        getColsName() {
            return ['Role name', 'Description', 'priviliges']
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
        }
    }
}


</script>

