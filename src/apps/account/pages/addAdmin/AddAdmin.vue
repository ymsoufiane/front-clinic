<template>
  <FormDashboard :alertInfo="alertInfo" @submitForm="submit" :inputs="inputs" />
</template>

<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import adminForm from '../../json/form/admin_form.json';
import getRoles from '../../mixin/getRoles'
import userApi from '../../api/user'
import getAccountTypes from '../../mixin/getAccountTypes';
export default {

  name: 'AddAdmin',
  mixins: [getRoles,getAccountTypes],
  created() {
    this.$store.commit('form/setInitData', {})
    this.inputs.forEach(async (input) => {
      if (input['name'] == 'submit') {
        input['text'] = "Add Admin"
      } else if (input['name'] == 'roles') {
        input['options'] = await this.getRoleOptions()
      } else if (input['name'] == 'accountTypeId') {
        input['options'] = await this.getOptionsAccountTypes()
      }
    });

  },
  data: function () {
    return {
      inputs: [...adminForm],
      alertInfo: {}
    }
  },
  components: { FormDashboard },
  methods: {

    async submit(user) {
      userApi.addUser(user, (err) => {
        if (err != null) {
          this.$store.commit('form/setErr', err)
          return
        }
        this.$store.commit('form/setErr', {})
        this.$store.commit("form/clearForm")
        this.alertInfo = {
          "type": "success",
          "showAlert": true,
          "message": "success add user " + user['username']
        }

      })


    }
  }
}
</script>
