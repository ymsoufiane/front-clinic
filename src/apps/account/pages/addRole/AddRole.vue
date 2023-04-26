<template>
  <FormDashboard :alertInfo="alertInfo" :inputs="inputs" @submitForm="submit" />
</template>

<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import role_form from '../../json/form/role_form.json';
import getPriviliges from '../../mixin/getPriviligesOptions';
import roleApi from "@/apps/account/api/role";
export default {
  name: 'AddRole',
  mixins: [getPriviliges],
  created() {
    this.$store.commit('form/setInitData', {})
    this.inputs.forEach(async (input) => {
      if (input['name'] == 'submit') {
        input['text'] = "Add Role"
      } else if (input['name'] == 'priviliges') {
        console.log("success")
        input['options'] = await this.getPriviligesFormOptions()
      }
    });

  },
  data: function () {
    return {
      inputs: [...role_form],
      alertInfo: {}
    }
  },
  components: { FormDashboard },
  methods: {

    async submit(role) {
      roleApi.addRole(role, (err) => {
        if (err != null) {
          this.$store.commit('form/setErr', err)
          return
        }
        this.$store.commit('form/setErr', {})
        this.$store.commit("form/clearForm")
        this.alertInfo = {
          "type": "success",
          "showAlert": true,
          "message": "success add role " + role['roleName']
        }

      })
    }
  }
}
</script>
