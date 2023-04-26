<template>
  <div class="home bg-white shadow-sm rounded p-8 text-start">
    <div class="flex flex-col h-full">
      <div class="flex">
        <template v-for="(group, index) in groups" :key="index">
          <button :class="{ 'bg-gray-200': activeTabIndex === index }" class="py-2 px-4 font-semibold"
            @click="activeTabIndex = index">
            {{ group.label }}
          </button>
        </template>
      </div>
      <div class="flex-1">
        <form @submit="handleSubmit">
          <div v-for="(group, index) in groups" :key="index">
            <div v-show="index == activeTabIndex" class="grid gap-x-4 sm:grid-cols-5 lg:grid-cols-10 ">
              <template v-for="(input, index1) in group.inputs" :key="index1">
                <GenericInput @changeValueInput="handelChange($event)" :input="input" />
              </template>
              <GenericInput v-if="index != groups.length - 1" @click=" activeTabIndex = activeTabIndex + 1" :input="nextButton" />
            </div>
          </div>
        </form>
      </div>
    </div>
    <AlertComponent :message="messageAlert" :initEtat="showAlert" :type="typeAlert" />
  </div>
</template>
  
<script>
import GenericInput from '@/components/inputs/GenericInput.vue';
import formMethods from '@/mixin/formMethods'
import AlertComponent from '@/components/alert/AlertComponent.vue';
export default {
  props: ['groups'],
  components: {
    GenericInput,AlertComponent
  },
  mixins: [formMethods],
  data() {
    
    return {
      activeTabIndex: 0,
      nextButton: { "type": "button", "text": "Next" },
    };
  },
};
</script>
  