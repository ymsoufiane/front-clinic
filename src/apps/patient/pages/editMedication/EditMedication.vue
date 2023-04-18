<template>
    <FormDashboard :alertInfo="alertInfo" :inputs="inputs" @submitForm="submit" />
</template>
  
<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import medicationForm from '../../json/forms/medication_form.json';
import Api from '@/api';
import error_parse from '@/api/error_parse';
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
        try {
            let response = await Api.get('/patientService/medication/' + medicationId)
            let medication = response.data
            this.$store.commit('form/setInitData', medication)

        } catch (error) {
            const err = error_parse(error)
            this.$store.commit('form/setErr', err)
        }
    },
    data: function () {

        return {
            alertInfo: {},
            inputs: [...medicationForm]
        }
    },


    methods: {
        async submit(medication) {
            try {
                await Api.post('/patientService/medication/update', medication)
                this.$store.commit('form/setErr', {})
                this.$store.commit("form/clearForm")
                this.alertInfo = {
                    "type": "success",
                    "showAlert": true,
                    "message": "success update Medication " + medication['MedicationName']
                }

            } catch (error) {
                const err = error_parse(error)
                this.$store.commit('form/setErr', err)
            }
        }
    }
}
</script>
  