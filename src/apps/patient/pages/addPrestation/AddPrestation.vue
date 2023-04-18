<template>
    <FormDashboard :alertInfo="alertInfo" @submitForm="submit" :inputs="inputs" />
  </template>
  
  <script>
  import FormDashboard from '@/components/form/FormDashboard.vue';
  import prestationForm from '../../json/forms/prestation_form.json';
  import Api from '@/api';
  import getCategoriePrestation from '../../mixin/getCategoriePrestation';
  import error_parse from '@/api/error_parse';
  export default {
  
    name: 'AddPrestation',
    mixins:[getCategoriePrestation],
    created() {
      this.$store.commit('form/setInitData', {})
      this.inputs.forEach(async(input) => {
        if (input['name'] == 'submit') {
          input['text'] = "Add Prestation"
        }else if(input['name']=='prestationCategorieID'){
          input['options']=await this.getOptionsCategoriesPrestation()
        }
      });
    
    },
    data: function () {
      return {
        inputs: [...prestationForm],
        alertInfo:{}
      }
    },
    components: { FormDashboard },
    methods: {
    
      async submit(prestation) {
        try {
          await Api.post('/patientService/prestation/add', prestation)
          this.$store.commit('form/setErr',{})
          this.$store.commit("form/clearForm")
          this.alertInfo={
            "type":"success",
            "showAlert":true,
            "message":"success add prestation "+prestation['label']
          }
          
        } catch (error) {
          const err=error_parse(error)
          this.$store.commit('form/setErr',err)
        }
  
      }
    }
  }
  </script>
  