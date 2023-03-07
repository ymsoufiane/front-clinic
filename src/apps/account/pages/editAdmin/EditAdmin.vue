<template>
    <FormDashboard :inputs="inputs"  />
</template>
  
<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import adminForm from '../../components/forms/adminForm';
export default {

    name: 'EditAdmin',
    created() {
        this.inputs.forEach(input => {
            if(input['name']=='submit')
                {
                    input['text']="Update Admin"
                }
            if(this.initData)
                input['value']=this.initData[input['name']]
                
        });
    },
    data: function () {
        return {
            initData: {
                "first_name": "soufiane",
                "last_name": "yemlahi",
                "email": "ymsoufiane@gmail.com",
                "phone_number": "062293949",
                "password":"",
                "roles": [
                    { "name": "Role3", "value": 3 },
                    { "name": "Role4", "value": 4 },
                ]
            },
            inputs: adminForm
        }
    },
    components: { FormDashboard }
}
</script>
  