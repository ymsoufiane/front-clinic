<template>
  <FormDashboard :alertInfo="alertInfo" @submitForm="submit" :inputs="inputs" />
</template>
  
<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import medicationForm from '../../json/forms/medication_form.json';
import medicationApi from "@/apps/patient/api/medication";
export default {

  name: 'AddMedication',
  created() {
    this.$store.commit('form/setInitData', {})
    this.inputs.forEach(input => {
      if (input['name'] == 'submit') {
        input['text'] = "Add Medication"
      }
    });

  },
  data: function () {
    return {
      inputs: [...medicationForm],
      alertInfo: {}
    }
  },
  components: { FormDashboard },
  methods: {

    async submit(medication) {
      medicationApi.addMedication(medication, (err) => {
        if (err != null) {
          this.$store.commit('form/setErr', err)
          return
        }
        this.$store.commit('form/setErr', {})
        this.$store.commit("form/clearForm")
        this.alertInfo = {
          "type": "success",
          "showAlert": true,
          "message": "success add medication " + medication['medicationName']
        }
      })


    }
  }
}
</script>
  