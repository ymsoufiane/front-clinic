<template>
  <FormDashboard :alertInfo="alertInfo" :inputs="inputs" @submitForm="submit" />
</template>

<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import form from '../../components/forms/roleForm';
import Api from '@/api';
import error_parse from '@/api/error_parse';
export default {

  name: 'AddRole',
  created() {
    this.$store.commit('form/setInitData', {})
    this.inputs.forEach(input => {
      if (input['name'] == 'submit') {
        input['text'] = "Add Role"
      }
    });

  },
  data: function () {
    return {
      inputs: [...form.roleForm],
      alertInfo: {}
    }
  },
  components: { FormDashboard },
  methods: {
    async submit(role) {
      console.log(role)
      try {
        await Api.post('/role/add', role)
        this.$store.commit('form/setErr', {})
        this.$store.commit("form/clearForm")
        this.alertInfo = {
          "type": "success",
          "showAlert": true,
          "message": "success add role " + role['roleName']
        }

      } catch (error) {
        const err = error_parse(error)
        this.$store.commit('form/setErr', err)
      }
    }
  }
}
</script>
