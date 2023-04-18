<template>
  <FormDashboard :alertInfo="alertInfo" @submitForm="submit" :inputs="inputs" />
</template>

<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import adminForm from '../../json/form/admin_form.json';
import Api from '@/api';
import getRoles from '../../mixin/getRoles'
import error_parse from '@/api/error_parse';
export default {

  name: 'AddAdmin',
  mixins:[getRoles],
  created() {
    this.$store.commit('form/setInitData', {})
    this.inputs.forEach(async(input) => {
      if (input['name'] == 'submit') {
        input['text'] = "Add Admin"
      }else if(input['name']=='roles'){
        input['options']=await this.getOptions()
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
