<template>
    <TabsForm :alertInfo="alertInfo" @submitForm="submit" :groups="groups" />
</template>
  
<script>
import patientForm from '../../json/forms/patient_form.json';
import TabsForm from '@/components/form/TabsForm.vue';
import patientApi from "@/apps/patient/api/patient";

export default {

    name: 'EditPatient',
    components: { TabsForm },
    created() {

        let groupLength = this.groups.length - 1
        let inputLength = this.groups[groupLength].inputs.length - 1
        this.groups[groupLength].inputs[inputLength].text = "Update Patient"

    },
    async mounted() {
        let patientId = this.$route.params.id
        console.log("patientId+>>>>")
        console.log(patientId)
        patientApi.getPatient(patientId, (err, patient) => {
            if (err != null) {
                return
            }
            patient['gender'] = { "name": patient['gender'], "value": patient['gender'] }
            patient['bloodType'] = { "name": patient['bloodType'], "value": patient['bloodType'] }
            patient['maritalStatus'] = { "name": patient['maritalStatus'], "value": patient['maritalStatus'] }
            patient['smokingStatus'] = { "name": patient['smokingStatus'], "value": patient['smokingStatus'] }
            patient['alcoholConsumption'] = { "name": patient['alcoholConsumption'], "value": patient['alcoholConsumption'] }
            patient['preferredContactMethod'] = { "name": patient['preferredContactMethod'], "value": patient['preferredContactMethod'] }
            patient['dateOfBirth'] = patient['dateOfBirth'].substring(0, 10);
            patient['dateOfLastVisit'] = patient['dateOfLastVisit'].substring(0, 10);
            this.$store.commit('form/setInitData', patient)

        })

    },
    data: function () {

        return {
            alertInfo: {},
            groups: [...patientForm],
        }
    },


    methods: {
        async submit(patient) {
            patientApi.addPatient(patient, (err) => {
                if (err != null) {
                    this.$store.commit('form/setErr', err)
                    return
                }
                this.$store.commit('form/setErr', {})
                this.$store.commit("form/clearForm")
                this.alertInfo = {
                    "type": "success",
                    "showAlert": true,
                    "message": "success update patient " + patient['firstName']
                }
            })

        }
    }
}
</script>
  