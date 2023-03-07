<template>
   <FormDashboard :inputs="inputs" @submitForm="onsubmit"  />
</template>

<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import roleForm from '../../components/forms/roleForm';
export default {

  name: 'AddRole',
  data:function(){
    return{
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
