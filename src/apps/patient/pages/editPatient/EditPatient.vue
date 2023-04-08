<template>
    <FormDashboard :alertInfo="alertInfo"  cols="sm:grid-cols-10 lg:grid-cols-20" :inputs="inputs" @submitForm="submit" />
</template>
  
<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import patientForm from '../../componenets/forms/patientForm';
import Api from '../../api/index';
import error_parse from '@/api/error_parse';
export default {

    name: 'EditPatient',
    components: { FormDashboard },
    created() {

        this.inputs.forEach(input => {
            if (input['name'] == 'submit') {
                input['text'] = "Update Patient"
            }
        });
    },
   async mounted(){
        let userId=this.$route.params.id
        try {
            let response=await Api.get('/patient/'+userId)
            let patient=response.data
            patient['gender']={"name":patient['gender'],"value":patient['gender']}
            patient['bloodType']={"name":patient['bloodType'],"value":patient['bloodType']}
            patient['maritalStatus']={"name":patient['maritalStatus'],"value":patient['maritalStatus']}
            patient['smokingStatus']={"name":patient['smokingStatus'],"value":patient['smokingStatus']}
            patient['alcoholConsumption']={"name":patient['alcoholConsumption'],"value":patient['alcoholConsumption']}
            patient['preferredContactMethod']={"name":patient['preferredContactMethod'],"value":patient['preferredContactMethod']}
            patient['dateOfBirth']=patient['dateOfBirth'].substring(0, 10);
            patient['dateOfLastVisit']=patient['dateOfLastVisit'].substring(0, 10);
            this.$store.commit('form/setInitData',patient)

            
        } catch (error) {
            console.log(error)
        }
    },
    data: function () {

        return {
            alertInfo:{},
            inputs: [...patientForm]
        }
    },


    methods: {
        async submit(user) {
            try {
                await Api.post('/patient/update', user)
                this.$store.commit('form/setErr', {})
                this.$store.commit("form/clearForm")
                this.alertInfo = {
                    "type": "success",
                    "showAlert": true,
                    "message": "success update patient " + user['firstName']
                }

            } catch (error) {
                const err = error_parse(error)
                this.$store.commit('form/setErr', err)
            }
        }
    }
}
</script>
  