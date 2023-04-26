<template>
  <FormDashboard :alertInfo="alertInfo" :inputs="inputs" @submitForm="onsubmit" />
</template>
 
<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import role_form from '../../json/form/role_form.json';
import getPriviliges from '../../mixin/getPriviligesOptions';
import roleApi from "@/apps/account/api/role";
export default {

  name: 'EditRole',
  mixins: [getPriviliges],
  created() {
    this.inputs.forEach(async (input) => {
      if (input['name'] == 'submit') {
        input['text'] = "Update Role"
      } else if (input['name'] == 'priviliges') {
        input['options'] = await this.getPriviligesFormOptions()
      }

    });
  },
  data: function () {
    return {
      alertInfo: {},
      inputs: [...role_form],
    }
  },
  components: { FormDashboard },
  methods: {
    async onsubmit(role) {
      roleApi.updateRole(role, (err) => {
        if (err != null) {
          this.$store.commit('form/setErr', err)
          return
        }
        this.$store.commit('form/setErr', {})
        this.$store.commit("form/clearForm")
        this.alertInfo = {
          "type": "success",
          "showAlert": true,
          "message": "success update role " + role['roleName']
        }

      })
    }
  }
}
</script>
 