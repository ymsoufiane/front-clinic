<template>
    <div class="py-2">
        <div class="title py  text-sm" :class="colorTitle" >
            {{input['title']}}
        </div>
        <div :class="colorBorder" class="rounded py-2 flex">
            <div class="w-full">
                <input :class="placeholderColor" :name="input['name']" v-model="inputValue" class="px-4 outline-none w-full text-base text-[#000000de] font-light"
                :type="input['type']" :placeholder="input['placeholder']" @input="handleInput">
            </div>
            <div class="w-min px-4 content-center flex " v-if="input['icon']!=null">
                <slot name="icon"></slot>
            </div>
            
        </div>
        <div class="text-[#ef4444] text-start">
            {{ input['err'] }}
        </div>
    </div>
</template>
<script>


export default {
    name: 'InputDashboard',
    props: ['input'],
    data:function(){
        return {
            inputValue:this.input['value']
        }
    },
    methods: {
        handleInput(e) {
            this.$emit('changeValue', e)
        },
    },
    watch:{
        value(){
            this.inputValue=this.value
        },
        clearForm(){
                this.inputValue=""
        }

    },
    computed: {
        value(){
            return this.input['value']
        },
        colorBorder() {
            return this.input['err'] != "" && this.input['err'] == null ? "border-[#e4e4f3] border-2" : "border-[#ef4444] border-[1px]"
        },
        colorTitle(){
            return this.input['err'] != "" && this.input['err'] == null ? "text-[#1e293b]":"text-[#ef4444]"
        },

        placeholderColor() {
            return this.input['err'] != "" && this.input['err'] == null ? "placeholder-[#b6b6d9]" : "placeholder-[#ef446cb8]"
        },
        clearForm() {
            return this.$store.getters['form/getClearForm']
        }


    }
}
</script>