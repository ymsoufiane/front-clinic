<template>
  <FormDashboard :inputs="inputs" />
</template>

<script>
import FormDashboard from '@/components/form/FormDashboard.vue';
import adminForm from '../../components/forms/adminForm';
export default {

  name: 'AddAdmin',
  data: function () {
    return {
      inputs:adminForm
    }
  },
  components: { FormDashboard }
}
</script>
