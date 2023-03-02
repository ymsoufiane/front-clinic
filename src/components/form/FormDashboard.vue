<template>
    <div class="home bg-white shadow-sm rounded p-8 text-start">
        <div class="form">
            <form @submit="handleSubmit">
                <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-4 ">
                    <template v-for="(input, index) in inputs" :key="index">
                        <div v-if="input['type'] == 'tagInput'" class="sm:col-span-1 lg:col-span-2">
                            <TagInputSelect @change="handelChange($event,input)" :placeholder="input['placeholder']" :options="input['options']" />
                        </div>

                        <div v-else-if="input['type'] == 'submit'" class="sm:col-span-1 lg:col-span-2 grid lg:grid-cols-10 sm:grid-cols-4">
                            <div class="submit lg:col-span-4 lg:col-start-4 sm:col-span-2 sm:col-start-2">
                                <SubmitButton text="Add User" />
                            </div>
                        </div>
                        
                        <InputDashboard @input="handelChange($event.target.value,input)" v-else :input="input">
                            <template v-slot:icon>
                                <DynamicComponenet width="20px" fill="#e4e4f3" stroke="#e4e4f3" :component="input['icon']" />
                            </template>
                        </InputDashboard>
                    </template>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import InputDashboard from '@/components/inputs/InputDashboard.vue'
import DynamicComponenet from '@/components/DynamicComponenet.vue';
import SubmitButton from '@/components/buttons/SubmitButton.vue';
import TagInputSelect from '@/components/inputs/TagInputSelect.vue'
export default {
    name: 'FormDashboard',
    props: ['inputs'],
    data:function(){
        return {
            formData:{}
        }
    },
    components: { InputDashboard, SubmitButton, TagInputSelect,DynamicComponenet },
    methods:{
        handleSubmit(event){
            event.preventDefault();
            console.log(this.formData)
            this.$emit('submit',event)
        },
        handelChange(value,input){
            this.formData[input['name']]=value
        },
        test(event){
            console.log("recieve change ")
            console.log(event)
        }
    },
}

</script>