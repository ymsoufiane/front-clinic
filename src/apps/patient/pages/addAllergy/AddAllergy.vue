<template>
    <FormDashboard :alertInfo="alertInfo" @submitForm="submit" :inputs="inputs" />
  </template>
  
  <script>
  import FormDashboard from '@/components/form/FormDashboard.vue';
  import allergyForm from '../../componenets/forms/allergyForm';
  import Api from '../../api/index';
  import error_parse from '@/api/error_parse';
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
        alertInfo:{}
      }
    },
    components: { FormDashboard },
    methods: {
    
      async submit(allergy) {
        try {
          await Api.post('/patientService/allergy/add', allergy)
          this.$store.commit('form/setErr',{})
          this.$store.commit("form/clearForm")
          this.alertInfo={
            "type":"success",
            "showAlert":true,
            "message":"success add user "+allergy['allergyName']
          }
          
        } catch (error) {
          const err=error_parse(error)
          this.$store.commit('form/setErr',err)
        }
  
      }
    }
  }
  </script>
  