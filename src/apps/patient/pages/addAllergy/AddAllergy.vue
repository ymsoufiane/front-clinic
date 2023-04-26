<template>
  <FormDashboard :alertInfo="alertInfo" @submitForm="submit" :inputs="inputs" />
</template>
  
<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import allergyForm from '../../json/forms/allergy_form.json';
import allergyApi from "@/apps/patient/api/allergy";
export default {

  name: 'AddAllergy',
  created() {
    this.$store.commit('form/setInitData', {})
    this.inputs.forEach(input => {
      if (input['name'] == 'submit') {
        input['text'] = "Add Allergy"
      }
    });

  },
  data: function () {
    return {
      inputs: [...allergyForm],
      alertInfo: {}
    }
  },
  components: { FormDashboard },
  methods: {

    async submit(allergy) {
      allergyApi.addAllergy(allergy, (err) => {
        if (err != null) {
          this.$store.commit('form/setErr', err)
          return
        }
        this.$store.commit('form/setErr', {})
        this.$store.commit("form/clearForm")
        this.alertInfo = {
          "type": "success",
          "showAlert": true,
          "message": "success add allergy " + allergy['allergyName']
        }
      })


    }
  }
}
</script>
  