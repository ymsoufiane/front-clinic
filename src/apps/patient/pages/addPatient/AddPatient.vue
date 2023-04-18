<template>
    <TabsForm :alertInfo="alertInfo"  @submitForm="submit" :groups="groups" />
  </template>
  
  <script>
  import patientForm from '../../json/forms/patient_form.json';
  import TabsForm from '@/components/form/TabsForm.vue';
  import Api from '@/api';
  import error_parse from '@/api/error_parse';
  export default {
  
    name: 'AddPatient',
    created() {
      this.$store.commit('form/setInitData', {})
      let groupLength=this.groups.length-1
      let inputLength=this.groups[groupLength].inputs.length-1
      this.groups[groupLength].inputs[inputLength].text="Add Patient"
    
    },
    data: function () {
      return {
        groups: [...patientForm],
        alertInfo:{}
      }
    },
    components: { TabsForm },
    methods: {
    
      async submit(patient) {
        try {
          await Api.post('/patientService/patient/add', patient)
          this.$store.commit('form/setErr',{})
          this.$store.commit("form/clearForm")
          this.alertInfo={
            "type":"success",
            "showAlert":true,
            "message":"success add user "+patient['firstName']
          }
          
        } catch (error) {
          const err=error_parse(error)
          this.alertInfo={
            "type":"error",
            "showAlert":true,
            "message":"Error: Please check all required fields. "
          }
          this.$store.commit('form/setErr',err)
        }
  
      }
    }
  }
  </script>
  