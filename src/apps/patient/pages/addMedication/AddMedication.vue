<template>
    <FormDashboard :alertInfo="alertInfo" @submitForm="submit" :inputs="inputs" />
  </template>
  
  <script>
  import FormDashboard from '@/components/form/FormDashboard.vue';
  import medicationForm from '../../componenets/forms/medicationForm';
  import Api from '../../api/index';
  import error_parse from '@/api/error_parse';
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
        alertInfo:{}
      }
    },
    components: { FormDashboard },
    methods: {
    
      async submit(Medication) {
        try {
          await Api.post('/medication/add', Medication)
          this.$store.commit('form/setErr',{})
          this.$store.commit("form/clearForm")
          this.alertInfo={
            "type":"success",
            "showAlert":true,
            "message":"success add user "+Medication['medicationName']
          }
          
        } catch (error) {
          const err=error_parse(error)
          this.$store.commit('form/setErr',err)
        }
  
      }
    }
  }
  </script>
  