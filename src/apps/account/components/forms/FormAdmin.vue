<template>
  <div class="home bg-white shadow-sm rounded p-8 text-start">
    <div class="form ">
      <form action="">
        <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-4 ">
          <InputDashboard type="text" title="First name">
            <template v-slot:icon>
              <UserIcon class="icon-form" />
            </template>
          </InputDashboard>
          <InputDashboard type="text" title="Last name">
            <template v-slot:icon>
              <UserIcon class="icon-form" />
            </template>
          </InputDashboard>
          <InputDashboard type="text" title="E-mail">
            <template v-slot:icon>
              <UserIcon class="icon-form" />
            </template>
          </InputDashboard>
          <InputDashboard type="text" title="Phone number">
            <template v-slot:icon>
              <UserIcon class="icon-form" />
            </template>
          </InputDashboard>
          <InputDashboard type="password" title="Password">
            <template v-slot:icon>
              <UserIcon class="icon-form" />
            </template>
          </InputDashboard>
          <InputDashboard type="password" title="Confirm password">
            <template v-slot:icon>
              <UserIcon class="icon-form" />
            </template>
          </InputDashboard>
          <div class="sm:col-span-1 lg:col-span-2">
            <TagInputSelect placeholder="Select Roles" :options="options" />
          </div>
          <div class="sm:col-span-1 lg:col-span-2 grid lg:grid-cols-10 sm:grid-cols-4">
            <div class="submit lg:col-span-4 lg:col-start-4 sm:col-span-2 sm:col-start-2">
              <SubmitButton text="Add User" />
            </div>
          </div>
        </div>
      </form>


    </div>
  </div>
</template>
  
<script>
import InputDashboard from '@/components/inputs/InputDashboard.vue'
import UserIcon from '@/components/icons/UserIcon.vue';
import SubmitButton from '../button/SubmitButton.vue';
import TagInputSelect from '@/components/inputs/TagInputSelect.vue'
export default {

  name: 'AddUser',
  data: function () {
    return {
      options: ['Role1', 'Role2', 'Role3', 'Item1'],
    }
  },
  components: { InputDashboard, UserIcon, SubmitButton, TagInputSelect }
}
</script>
<style>


</style>
  