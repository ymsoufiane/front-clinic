<template>
    <FormDashboard :inputs="inputs" @submitForm="onsubmit" :initData="initData"  />
 </template>
 
 <script>
 import FormDashboard from '@/components/form/FormDashboard.vue';
 import roleForm from '../../components/forms/roleForm';
 export default {
 
   name: 'EditRole',
   created() {
        this.inputs.forEach(input => {
            if(input['name']=='submit')
                {
                    input['text']="Update Role"
                }
            if(this.initData)
                input['value']=this.initData[input['name']]
                
        });
    },
   data:function(){
     return{
       initData:{
        "role_name":"Role lvlf"
       },
       inputs:roleForm
     }
   },
   components: {FormDashboard },
   methods:{
     onsubmit(data){
       console.log("recieve submit event")
       console.log(data)
     }
   }
 }
 </script>
 