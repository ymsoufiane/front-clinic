<template>
    <FormDashboard :alertInfo="alertInfo" :inputs="inputs" @submitForm="submit" />
</template>
  
<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import prestationForm from '../../json/forms/prestation_form.json';
import getCategoriePrestation from '../../mixin/getCategoriePrestation';
import prestationApi from "@/apps/patient/api/prestation";
export default {

    name: 'EditPrestation',
    mixins: [getCategoriePrestation],
    components: { FormDashboard },
    created() {

        this.inputs.forEach(async (input) => {
            if (input['name'] == 'submit') {
                input['text'] = "Update Prestation"
            } else if (input['name'] == 'prestationCategorieID') {
                input['options'] = await this.getOptionsCategoriesPrestation()
            }
        });
    },
    async mounted() {
        let prestationId = this.$route.params.id
        prestationApi.getPrestation(prestationId, (err, prestation) => {
            if (err != null) return
            prestation['price'] = prestation['price'] + ''
            prestation['prestationCategorieID'] = { "name": prestation['prestationCategorie']['label'], "value": prestation['prestationCategorieID'] }
            this.$store.commit('form/setInitData', prestation)
        })

    },
    data: function () {
        return {
            alertInfo: {},
            inputs: [...prestationForm]
        }
    },


    methods: {
        async submit(prestation) {
            prestation['price']=parseFloat(prestation['price'])
            prestation['taxe']=parseFloat(prestation['taxe'])
            prestationApi.updatePrestation(prestation, (err) => {
                if (err != null) {
                    this.$store.commit('form/setErr', err)
                    return
                }
                this.$store.commit('form/setErr', {})
                this.$store.commit("form/clearForm")
                this.alertInfo = {
                    "type": "success",
                    "showAlert": true,
                    "message": "success update prestation " + prestation['label']
                }
            })

        }
    }
}
</script>
  