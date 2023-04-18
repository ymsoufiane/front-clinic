<template>
  <FormDashboard :alertInfo="alertInfo" :inputs="inputs" @submitForm="onsubmit"  />
</template>
 
<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import role_form from '../../json/form/role_form.json';
import Api from '@/api';
import error_parse from '@/api/error_parse';
import getPriviliges from '../../mixin/getPriviligesOptions';
export default {

  name: 'EditRole',
  mixins:[getPriviliges],
  created() {
    this.inputs.forEach(async(input) => {
      if (input['name'] == 'submit') {
        input['text'] = "Update Role"
      }else if(input['name']=='priviliges'){
        input['options']=await this.getPriviligesFormOptions()
      }

    });
  },
  data: function () {
    return {
      alertInfo:{},
      inputs: [...role_form],
    }
  },
  components: { FormDashboard },
  methods: {
    async onsubmit(role) {
      try {
        await Api.post('/accountService/role/update/' + role['ID'], role)
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
 