<template>
    <div v-if="isOpen" class="relative flex items-center p-4 border-l-4  rounded shadow-sm " :class="alertClasses">
        <div class="flex-grow " :class="textClasses">
            {{message}}
        </div><button type="button" @click="changeEtat"
            class="absolute relative flex items-center justify-center ml-4 flex-shrink-0 w-6 h-6 transition duration-100 ease-in-out rounded  focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 "
            :class="closeClasses"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                class="fill-current h-4 w-4 ">
                <path clip-rule="evenodd" fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z">
                </path>
            </svg></button>
    </div>
</template>
  
<script>
export default {
    name: "AlertComponen",
    props: {
        type: {
            type: String,
            default: "info",
            validator: (value) => ["info", "success", "warning", "error"].includes(value),
        },
        classes: {
            type: String,
            default: "",
        },
        initEtat:{
            type:Boolean,
            default:false
        },
        message:{
            type:String
        }
    },
    data: function () {
        return {
            isOpen: this.initEtat
        }
    },
    methods: {
        changeEtat() {
            this.isOpen = !this.isOpen
        }
    },
    watch:{
        initEtat(newValue){
            this.isOpen=newValue
        },
        message(newValue){
            if(newValue!=""&&newValue)
                this.isOpen=true
            else 
                this.isOpen=false
        }
    },
    computed: {
        alertClasses() {
            return [
                "p-4",
                "rounded",
                "text-white",
                this.classes,
                {
                    "bg-blue-50 border-blue-500": this.type === "info",
                    "bg-green-50 border-green-500": this.type === "success",
                    "bg-yellow-50  border-yellow-500": this.type === "warning",
                    "bg-red-50 border-red-500": this.type === "error",
                },
            ];
        },
        textClasses() {
            return {
                "text-blue-700": this.type === "info",
                "text-green-700": this.type === "success",
                "text-yellow-700": this.type === "warning",
                "text-red-700": this.type === "error",
            }
        },
        closeClasses() {
            return {
                "text-blue-500 hover:bg-blue-200": this.type === "info",
                "text-green-500 hover:bg-green-200": this.type === "success",
                "text-yellow-500 hover:bg-yellow-200": this.type === "warning",
                "text-red-500 hover:bg-red-200": this.type === "error",
            }
        }

    },
};
</script>
  
<style scoped>
/* Optional styling for the component */
</style>
  