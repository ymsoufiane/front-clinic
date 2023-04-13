<template>
    <div class="py-2">
        <div class="title py  text-sm" :class="colorTitle" >
            {{input['title']}}
        </div>
        <div :class="colorBorder" class="rounded py-2 flex">
            <div class="w-full">
                <input :class="placeholderColor" :name="input['name']" v-model="inputValue" class="px-4 outline-none w-full text-base font-light"
                :type="input['type']" :placeholder="input['placeholder']" @input="handleInput">
            </div>
            <div class="w-min px-4 content-center flex " v-if="input['icon']!=null">
                <slot name="icon"></slot>
            </div>
            
        </div>
        <div class="text-[#ef4444] text-start">
            {{ err }}
        </div>
    </div>
</template>
<script>

import inputMethods from '@/mixin/inputMethods'
export default {
    name: 'InputDashboard',
    mixins:[inputMethods],
    mounted(){
        this.inputValue=this.value
    },
    data:function(){
        return {
            inputValue:""
        }
    },
    methods: {
        handleInput(e) {
            this.$emit('changeValue', e)
        },
    },
    watch:{
        initData(initData){
            this.inputValue=initData[this.input['name']]
        },
        clearForm(){
                this.inputValue=""
        }

    },
    computed: {
        clearForm() {
            return this.$store.getters['form/getClearForm']
        },

    }
}
</script>