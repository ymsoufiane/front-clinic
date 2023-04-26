<template>
    <FormDashboard :alertInfo="alertInfo" :inputs="inputs" @submitForm="submit" />
</template>
  
<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import allergyForm from '../../json/forms/allergy_form.json';
import allegyApi from "@/apps/patient/api/allergy";
export default {

    name: 'EditAllergy',
    components: { FormDashboard },
    created() {

        this.inputs.forEach(input => {
            if (input['name'] == 'submit') {
                input['text'] = "Update Allergy"
            }
        });
    },
    async mounted() {
        let allergyId = this.$route.params.id
        allegyApi.getAllergy(allergyId,(err,allergy)=>{
            this.$store.commit('form/setInitData', allergy)
        })

    },
    data: function () {

        return {
            alertInfo: {},
            inputs: [...allergyForm]
        }
    },


    methods: {
        async submit(Allergy) {
            allegyApi.updateAllergy(allegyApi, (err) => {
                if (err != null) {
                    this.$store.commit('form/setErr', err)
                    return
                }
                this.$store.commit('form/setErr', {})
                this.$store.commit("form/clearForm")
                this.alertInfo = {
                    "type": "success",
                    "showAlert": true,
                    "message": "success update Allergy " + Allergy['allergyName']
                }
            })

        }
    }
}
</script>
  