<template>
  <FormDashboard :alertInfo="alertInfo" :inputs="inputs" @submitForm="submit" />
</template>

<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import accountType_form from '../../json/form/accountType_form.json';
import accountTypeApi from "@/apps/account/api/accountType";
export default {
  name: 'AddAccountType',
  created() {
    this.$store.commit('form/setInitData', {})
    this.inputs.forEach(async (input) => {
      if (input['name'] == 'submit') {
        input['text'] = "Add Account Type"
      } 
    });

  },
  data: function () {
    return {
      inputs: [...accountType_form],
      alertInfo: {}
    }
  },
  components: { FormDashboard },
  methods: {

    async submit(accountType) {
      accountTypeApi.addAccountType(accountType, (err) => {
        if (err != null) {
          this.$store.commit('form/setErr', err)
          return
        }
        this.$store.commit('form/setErr', {})
        this.$store.commit("form/clearForm")
        this.alertInfo = {
          "type": "success",
          "showAlert": true,
          "message": "success add accountType " + accountType['accountType']
        }

      })
    }
  }
}
</script>
