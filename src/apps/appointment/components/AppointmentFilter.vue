<template>
    <div class="filter-container  justify-center flex space-x-4 py-2 mb-4">
        <select v-model="selectedDepartment" class="w-3/12 py-2 px-4 outline-0 border border-gray-300 rounded-md">
            <option value="0">Select Department</option>
            <option v-for="department in departments" :key="department.value" :value="department.value">{{department.name}}</option>
  
            <!-- Add more department options here -->
        </select>
        <select v-model="selectedDoctor" class="w-3/12 py-2 px-4 outline-0 border border-gray-300 rounded-md">
            <option value="0">Select Doctor</option>
            <option v-for="doctor in doctors" :value="doctor.value" :key="doctor.value">{{ doctor.name }}</option>
            
        </select>

    </div>
</template>

<script>

export default {
    props:{
        doctors:{
            type: Array,
            required: true
        },
        departments:{
            type: Array,
            required: true
        }
    },

    data() {
        return {
            selectedDoctor: "0",
            selectedDepartment: "0",
        }
    },
    watch:{
        selectedDoctor( newVal){
            this.$emit('doctorChanged', newVal);
        },
            
        selectedDepartment: function( newVal){
            this.selectedDoctor="0"
            this.$emit('departmentChanged', newVal);
        }

    }
}
</script>