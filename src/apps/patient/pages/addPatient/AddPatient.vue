<template>
    <FormDashboard :alertInfo="alertInfo" @submitForm="submit" cols="sm:grid-cols-10 lg:grid-cols-20" :inputs="inputs" />
  </template>
  
  <script>
  import FormDashboard from '@/components/form/FormDashboard.vue';
  import patientForm from '../../componenets/forms/patientForm';
  import Api from '../../api/index';
  import error_parse from '@/api/error_parse';
  export default {
  
    name: 'AddPatient',
    created() {
      this.$store.commit('form/setInitData', {})
      this.inputs.forEach(input => {
        if (input['name'] == 'submit') {
          input['text'] = "Add Patient"
        }
      });
    
    },
    data: function () {
      return {
        inputs: [...patientForm],
        alertInfo:{}
      }
    },
    components: { FormDashboard },
    methods: {
    
      async submit(patient) {
        try {
          await Api.post('/patient/add', patient)
          this.$store.commit('form/setErr',{})
          this.$store.commit("form/clearForm")
          this.alertInfo={
            "type":"success",
            "showAlert":true,
            "message":"success add user "+patient['firstName']
          }
          
        } catch (error) {
          const err=error_parse(error)
          this.$store.commit('form/setErr',err)
        }
  
      }
    }
  }
  </script>
  