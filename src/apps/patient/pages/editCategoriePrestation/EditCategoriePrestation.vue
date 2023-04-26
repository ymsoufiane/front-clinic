<template>
    <FormDashboard :alertInfo="alertInfo" :inputs="inputs" @submitForm="submit" />
</template>
  
<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import PrestationCategorieForm from '../../json/forms/PrestationCategorie_form.json';
import categoriePrestationApi from "@/apps/patient/api/categoriePrestation";
export default {

    name: 'EditCategoriePrestation',
    components: { FormDashboard },
    created() {

        this.inputs.forEach(async (input) => {
            if (input['name'] == 'submit') {
                input['text'] = "Update Prestation Categorie"
            }
        });
    },
    async mounted() {
        let prestationId = this.$route.params.id
        categoriePrestationApi.getCategorie(prestationId, (err, categorie) => {
            if(err!=null) return 
            this.$store.commit('form/setInitData', categorie)
        })
       
    },
    data: function () {
        return {
            alertInfo: {},
            inputs: [...PrestationCategorieForm]
        }
    },


    methods: {
        async submit(categoriePrestation) {
            categoriePrestationApi.updateCategorie(categoriePrestation, (err) => {
                if (err != null) {
                    this.$store.commit('form/setErr', err)
                    return
                }
                this.$store.commit('form/setErr', {})
                this.$store.commit("form/clearForm")
                this.alertInfo = {
                    "type": "success",
                    "showAlert": true,
                    "message": "success update categorie prestation : " + categoriePrestation['label']
                }
            })

        }
    }
}
</script>
  