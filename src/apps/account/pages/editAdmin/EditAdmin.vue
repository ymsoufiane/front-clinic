<template>
    <FormDashboard :alertInfo="alertInfo" :inputs="inputs" @submitForm="submit" />
</template>
  
<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import adminForm from '../../json/form/admin_form.json';
import userApi from "@/apps/account/api/user";
import getRoles from '../../mixin/getRoles'
import getAccountTypes from '../../mixin/getAccountTypes';
export default {

    name: 'EditAdmin',
    mixins: [getRoles,getAccountTypes],
    components: { FormDashboard },
    created() {
        this.inputs.forEach(async (input) => {
            if (input['name'] == 'submit') {
                input['text'] = "Update Admin"
            } else if (input['name'] == 'roles') {
                input['options'] = await this.getRoleOptions()
            }else if (input['name']=='accountTypeId'){
                input['options']=await this.getOptionsAccountTypes()
            }
        });

    },
    async mounted() {
        let userId = this.$route.params.id
        try {
            let user = await userApi.getUser(userId)
            let options = []
            user['roles'].forEach(role => {
                options.push({ "name": role['roleName'], "value": { "ID": role['ID'] } })
            });
            user['roles'] = options
            this.$store.commit('form/setInitData', user)
        } catch (error) {
            console.log(error)
        }

    },
    data: function () {

        return {
            alertInfo: {},
            inputs: [...adminForm]
        }
    },


    methods: {
        async submit(user) {
            userApi.updateUser(user, (err) => {
                if (err != null) {
                    this.$store.commit('form/setErr', err)
                    return
                }
                this.$store.commit('form/setErr', {})
                this.$store.commit("form/clearForm")
                this.alertInfo = {
                    "type": "success",
                    "showAlert": true,
                    "message": "success update user " + user['username']
                }

            })
            
        }
    }
}
</script>
  