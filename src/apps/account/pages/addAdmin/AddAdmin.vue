<template>
  <FormDashboard :alertInfo="alertInfo" @submitForm="submit" :inputs="inputs" />
</template>

<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import adminForm from '../../components/forms/adminForm';
import Api from '@/api';
import error_parse from '@/api/error_parse';
export default {

  name: 'AddAdmin',
  created() {
    this.$store.commit('form/setInitData', {})
    this.inputs.forEach(input => {
      if (input['name'] == 'submit') {
        input['text'] = "Add Admin"
      }
    });
  
  },
  data: function () {
    return {
      inputs: [...adminForm],
      alertInfo:{}
    }
  },
  components: { FormDashboard },
  methods: {
  
    async submit(user) {
      try {
        await Api.post('/accountService/user/add', user)
        this.$store.commit('form/setErr',{})
        this.$store.commit("form/clearForm")
        this.alertInfo={
          "type":"success",
          "showAlert":true,
          "message":"success add user "+user['username']
        }
        
      } catch (error) {
        const err=error_parse(error)
        this.$store.commit('form/setErr',err)
      }

    }
  }
}
</script>
