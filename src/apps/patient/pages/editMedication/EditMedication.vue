<template>
    <FormDashboard :alertInfo="alertInfo" :inputs="inputs" @submitForm="submit" />
</template>
  
<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import medicationForm from '../../json/forms/medication_form.json';
import medicationApi from "@/apps/patient/api/medication";
export default {

    name: 'EditMedication',
    components: { FormDashboard },
    created() {

        this.inputs.forEach(input => {
            if (input['name'] == 'submit') {
                input['text'] = "Update Medication"
            }
        });
    },
    async mounted() {
        let medicationId = this.$route.params.id
        medicationApi.getMedication(medicationId, (err, medication) => {
            if (err != null) return
            this.$store.commit('form/setInitData', medication)
        })

    },
    data: function () {

        return {
            alertInfo: {},
            inputs: [...medicationForm]
        }
    },


    methods: {
        async submit(medication) {
            medicationApi.updateMedication(medication, (err) => {
                if (err != null) {
                    this.$store.commit('form/setErr', err)
                    return
                }
                this.$store.commit('form/setErr', {})
                this.$store.commit("form/clearForm")
                this.alertInfo = {
                    "type": "success",
                    "showAlert": true,
                    "message": "success update Medication " + medication['MedicationName']
                }
            })

        }
    }
}
</script>
  