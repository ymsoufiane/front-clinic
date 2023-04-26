<template>
  <FormDashboard :alertInfo="alertInfo" @submitForm="submit" :inputs="inputs" />
</template>
  
<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import PrestationCategorieForm from '../../json/forms/PrestationCategorie_form.json';
import categoriePrestationApi from "@/apps/patient/api/categoriePrestation";
export default {

  name: 'AddPrestationCategorie',
  created() {
    this.$store.commit('form/setInitData', {})
    this.inputs.forEach(input => {
      if (input['name'] == 'submit') {
        input['text'] = "Add Prestation Categorie"
      }
    });

  },
  data: function () {
    return {
      inputs: [...PrestationCategorieForm],
      alertInfo: {}
    }
  },
  components: { FormDashboard },
  methods: {

    async submit(prestationCategorie) {
      categoriePrestationApi.addCategorie(prestationCategorie,(err)=>{
        if (err != null) {
          this.$store.commit('form/setErr', err)
          return
        }
        this.$store.commit('form/setErr', {})
        this.$store.commit("form/clearForm")
        this.alertInfo = {
          "type": "success",
          "showAlert": true,
          "message": "success add prestation categorie " + prestationCategorie['label']
        }
      })
     

    }
  }
}
</script>
  