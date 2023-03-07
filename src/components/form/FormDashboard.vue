<template>
    <div class="home bg-white shadow-sm rounded p-8 text-start">
        <div class="form">
            <form @submit="handleSubmit">
                <div class="grid gap-x-4 " :class="cols">
                    <template v-for="(input, index) in inputs" :key="index">
                        <GenericInput :input="input" />
                        <!-- <div v-if="input['type'] == 'tagInput'" class="col-span-full">
                            <TagInputSelect @change="handelChange($event,input)" :value="input['value']" :placeholder="input['placeholder']" :options="input['options']" />
                        </div>

                        <div v-else-if="input['type'] == 'submit'" class="col-span-full grid lg:grid-cols-10 sm:grid-cols-4">
                            <div class="submit lg:col-span-4 lg:col-start-4 sm:col-span-2 sm:col-start-2">
                                <SubmitButton :text="input['text']" />
                            </div>
                        </div>
                        
                        <InputDashboard @input="handelChange($event.target.value,input)" v-else :input="input">
                            <template v-slot:icon>
                                <DynamicComponenet width="20px" fill="#c0c0e4" stroke="#e4e4f3" :component="input['icon']" />
                            </template>
                        </InputDashboard> -->
                    </template>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
// import InputDashboard from '@/components/inputs/InputDashboard.vue'
// import DynamicComponenet from '@/components/DynamicComponenet.vue';
// import SubmitButton from '@/components/buttons/SubmitButton.vue';
// import TagInputSelect from '@/components/inputs/TagInputSelect.vue'
import GenericInput from '../inputs/GenericInput.vue';
export default {
    name: 'FormDashboard',
    props: {
        inputs:{
            type:Array,
            require:true,
        },
        cols:{
            type:String,
            require:false,
            default:"sm:grid-cols-1 lg:grid-cols-2"
        }
    },
    data:function(){
        return {
            formData:{}
        }
    },

    components: { GenericInput,/*InputDashboard, SubmitButton, TagInputSelect,DynamicComponenet*/ },
    methods:{
        handleSubmit(event){
            event.preventDefault();
            this.$emit('submitForm',this.formData)
        },
        handelChange(value,input){
            this.formData[input['name']]=value
        },
        
    },
}

</script>