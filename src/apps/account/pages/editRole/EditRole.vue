<template>
  <FormDashboard :alertInfo="alertInfo" :inputs="inputs" @submitForm="onsubmit" :initData="initData" />
</template>
 
<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import form from '../../components/forms/roleForm';
import Api from '@/api';
import error_parse from '@/api/error_parse';
export default {

  name: 'EditRole',
  created() {
    this.inputs.forEach(input => {
      if (input['name'] == 'submit') {
        input['text'] = "Update Role"
      }


    });
  },
  data: function () {
    return {
      alertInfo:{},
      inputs: form.roleForm
    }
  },
  components: { FormDashboard },
  methods: {
    async onsubmit(role) {
      try {
        await Api.post('/role/update/' + role['ID'], role)
        this.$store.commit('form/setErr', {})
        this.$store.commit("form/clearForm")
        this.alertInfo = {
          "type": "success",
          "showAlert": true,
          "message": "success update role " + role['roleName']
        }

      } catch (error) {
        const err = error_parse(error)
        this.$store.commit('form/setErr', err)
      }
    }
  }
}
</script>
 