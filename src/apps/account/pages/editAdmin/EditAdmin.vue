<template>
    <FormDashboard :alertInfo="alertInfo" :inputs="inputs" @submitForm="submit" />
</template>
  
<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import adminForm from '../../components/forms/adminForm';
import Api from '@/api';
import error_parse from '@/api/error_parse';
export default {

    name: 'EditAdmin',
    components: { FormDashboard },
    created() {

        this.inputs.forEach(input => {
            if (input['name'] == 'submit') {
                input['text'] = "Update Admin"
            }
        });
    },
    data: function () {

        return {
            alertInfo:{},
            inputs: [...adminForm]
        }
    },


    methods: {
        async submit(user) {
            try {
                await Api.post('/user/update/'+user['ID'], user)
                this.$store.commit('form/setErr', {})
                this.$store.commit("form/clearForm")
                this.alertInfo = {
                    "type": "success",
                    "showAlert": true,
                    "message": "success update user " + user['username']
                }

            } catch (error) {
                const err = error_parse(error)
                this.$store.commit('form/setErr', err)
            }
        }
    }
}
</script>
  