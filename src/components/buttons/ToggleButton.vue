<template >
  <div class="flex items-center justify-center">
    <label :for="getCheckBoxId" class="flex items-center cursor-pointer">
      <div class="relative">
        <!-- Input -->
        <input :id="getCheckBoxId" type="checkbox" class="sr-only"  :checked="isChecked" @change="toggleSwitch" />

        <!-- Switch -->
        <div :class="getColor" class="w-10 h-4  rounded-full shadow-inner"></div>

        <!-- Indicator -->
        <div
          class="absolute w-6 h-6 transition duration-200 ease-in-out transform bg-white rounded-full shadow top-0 left-0 -translate-x-1 -translate-y-1"
          :class="{ 'translate-x-full': isChecked, 'translate-x-0': !isChecked }"></div>
      </div>


    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: this.value,
      
    };
  },
  props: ['id','value'],
  computed: {
    getValue(){
      return this.value
    },
    getColor() {
      if (this.isChecked) {
        return "bg-[#4f46e5]"
      }
      return "bg-gray-400"
    },
    getCheckBoxId() {
      return "toggle" + this.id
    }
  },
  watch:{
        value(newValue){
            this.isChecked=newValue
        }
    },
  methods: {

    toggleSwitch() {
      this.isChecked = !this.isChecked;
    },
  },
};
</script>

<style scoped>
input:focus~div {
  box-shadow: 0 0 0 2px #fbc854;
}
</style>
