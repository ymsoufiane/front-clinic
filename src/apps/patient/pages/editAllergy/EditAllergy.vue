<template>
    <FormDashboard :alertInfo="alertInfo"  :inputs="inputs" @submitForm="submit" />
</template>
  
<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import allergyForm from '../../componenets/forms/allergyForm';
import Api from '../../api/index';
import error_parse from '@/api/error_parse';
export default {

    name: 'EditAllergy',
    components: { FormDashboard },
    created() {

        this.inputs.forEach(input => {
            if (input['name'] == 'submit') {
                input['text'] = "Update Allergy"
            }
        });
    },
   async mounted(){
        let AllergyId=this.$route.params.id
        try {
            let response=await Api.get('/patientService/allergy/'+AllergyId)
            let Allergy=response.data
            this.$store.commit('form/setInitData',Allergy)
            
        } catch (error) {
            console.log(error)
        }
    },
    data: function () {

        return {
            alertInfo:{},
            inputs: [...allergyForm]
        }
    },


    methods: {
        async submit(Allergy) {
            try {
                await Api.post('/patientService/allergy/update', Allergy)
                this.$store.commit('form/setErr', {})
                this.$store.commit("form/clearForm")
                this.alertInfo = {
                    "type": "success",
                    "showAlert": true,
                    "message": "success update Allergy " + Allergy['allergyName']
                }

            } catch (error) {
                const err = error_parse(error)
                this.$store.commit('form/setErr', err)
            }
        }
    }
}
</script>
  