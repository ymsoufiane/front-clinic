<template>
   <FormDashboard :inputs="inputs" />
</template>

<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
export default {

  name: 'AddRole',
  data:function(){
    return{
      inputs:[
        {"type":"text","name":"role_name","placeholder":"","title":"Role name","icon":"UserIcon"},
        {"type":"text","name":"description","placeholder":"","title":"Description","icon":"UserIcon"},
        { 
          "type":"tagInput",
          "name":"priviliges",
          "placeholder":"Select Priviliges",
          "options":[
            {"name":"Privilige1","value":1},
            {"name":"Privilige2","value":2},
            {"name":"Privilige3","value":3},
            {"name":"Privilige4","value":4},

          ]
        },
        {"type":"submit","text":"Add User"},
      ]
    }
  },
  components: {FormDashboard }
}
</script>
