<template>
    <FormDashboard :alertInfo="alertInfo" :inputs="inputs" @submitForm="submit" />
</template>
  
<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import PrestationCategorieForm from '../../json/forms/PrestationCategorie_form.json';
import Api from '@/api';
import error_parse from '@/api/error_parse';
export default {

    name: 'EditCategoriePrestation',
    components: { FormDashboard },
    created() {

        this.inputs.forEach(async(input) => {
            if (input['name'] == 'submit') {
                input['text'] = "Update Prestation Categorie"
            }
        });
    },
    async mounted() {
        let prestationId = this.$route.params.id
        try {
            let response = await Api.get('/patientService/prestationCategorie/' + prestationId)
            let categoriePrestation = response.data
            this.$store.commit('form/setInitData', categoriePrestation)

        } catch (error) {
            const err = error_parse(error)
            this.$store.commit('form/setErr', err)
        }
    },
    data: function () {
        return {
            alertInfo: {},
            inputs: [...PrestationCategorieForm]
        }
    },


    methods: {
        async submit(categoriePrestation) {
            try {
                await Api.post('/patientService/prestationCategorie/update', categoriePrestation)
                this.$store.commit('form/setErr', {})
                this.$store.commit("form/clearForm")
                this.alertInfo = {
                    "type": "success",
                    "showAlert": true,
                    "message": "success update categorie prestation : " + categoriePrestation['label']
                }

            } catch (error) {
                const err = error_parse(error)
                this.$store.commit('form/setErr', err)
            }
        }
    }
}
</script>
  