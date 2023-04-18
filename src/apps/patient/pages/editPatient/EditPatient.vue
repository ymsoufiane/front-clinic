<template>
    <TabsForm :alertInfo="alertInfo" @submitForm="submit" :groups="groups" />
</template>
  
<script>
import patientForm from '../../json/forms/patient_form.json';
import TabsForm from '@/components/form/TabsForm.vue';
import Api from '@/api';
import error_parse from '@/api/error_parse';
export default {

    name: 'EditPatient',
    components: { TabsForm },
    created() {

        let groupLength = this.groups.length - 1
        let inputLength = this.groups[groupLength].inputs.length - 1
        this.groups[groupLength].inputs[inputLength].text = "Update Patient"

    },
    async mounted() {
        let userId = this.$route.params.id
        try {
            let response = await Api.get('/patientService/patient/' + userId)
            let patient = response.data
            patient['gender'] = { "name": patient['gender'], "value": patient['gender'] }
            patient['bloodType'] = { "name": patient['bloodType'], "value": patient['bloodType'] }
            patient['maritalStatus'] = { "name": patient['maritalStatus'], "value": patient['maritalStatus'] }
            patient['smokingStatus'] = { "name": patient['smokingStatus'], "value": patient['smokingStatus'] }
            patient['alcoholConsumption'] = { "name": patient['alcoholConsumption'], "value": patient['alcoholConsumption'] }
            patient['preferredContactMethod'] = { "name": patient['preferredContactMethod'], "value": patient['preferredContactMethod'] }
            patient['dateOfBirth'] = patient['dateOfBirth'].substring(0, 10);
            patient['dateOfLastVisit'] = patient['dateOfLastVisit'].substring(0, 10);
            this.$store.commit('form/setInitData', patient)


        } catch (error) {
            const err = error_parse(error)
            this.$store.commit('form/setErr', err)
        }
    },
    data: function () {

        return {
            alertInfo: {},
            groups: [...patientForm],
        }
    },


    methods: {
        async submit(user) {
            try {
                await Api.post('/patientService/patient/update', user)
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
  