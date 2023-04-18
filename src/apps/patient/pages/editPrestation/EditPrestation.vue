<template>
    <FormDashboard :alertInfo="alertInfo" :inputs="inputs" @submitForm="submit" />
</template>
  
<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import prestationForm from '../../json/forms/prestation_form.json';
import Api from '@/api';
import error_parse from '@/api/error_parse';
import getCategoriePrestation from '../../mixin/getCategoriePrestation';
export default {

    name: 'EditPrestation',
    mixins:[getCategoriePrestation],
    components: { FormDashboard },
    created() {

        this.inputs.forEach(async(input) => {
            if (input['name'] == 'submit') {
                input['text'] = "Update Prestation"
            } else if (input['name'] == 'prestationCategorieID') {
                input['options'] = await this.getOptionsCategoriesPrestation()
            }
        });
    },
    async mounted() {
        let prestationId = this.$route.params.id
        try {
            let response = await Api.get('/patientService/prestation/' + prestationId)
            let prestation = response.data
            prestation['prix'] = prestation['prix'] + ''
            prestation['prestationCategorieID'] = { "name": prestation['prestationCategorie']['label'], "value": prestation['prestationCategorieID'] }
            this.$store.commit('form/setInitData', prestation)

        } catch (error) {
            const err = error_parse(error)
            this.$store.commit('form/setErr', err)
        }
    },
    data: function () {
        return {
            alertInfo: {},
            inputs: [...prestationForm]
        }
    },


    methods: {
        async submit(prestation) {
            try {
                await Api.post('/patientService/prestation/update', prestation)
                this.$store.commit('form/setErr', {})
                this.$store.commit("form/clearForm")
                this.alertInfo = {
                    "type": "success",
                    "showAlert": true,
                    "message": "success update prestation " + prestation['label']
                }

            } catch (error) {
                const err = error_parse(error)
                this.$store.commit('form/setErr', err)
            }
        }
    }
}
</script>
  