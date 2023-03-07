<template>
    <div class="py-2">
        <div class="title py text-[#1e293b] text-sm">
            {{input['title']}}
        </div>
        <div :class="colorBorder" class="rounded py-2 flex">
            <div class="w-full">
                <input :class="placeholderColor" :name="input['name']" :value="input['value']" class="px-4 outline-none w-full text-base text-[#000000de] font-light"
                :type="input['type']" :placeholder="input['placeholder']" @input="handleInput">
            </div>
            <div class="w-min px-4 content-center flex ">
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

    methods: {
        handleInput(e) {
            this.$emit('input', e)
        },
    },
    computed: {

        colorBorder() {
            return this.input['err'] != "" && this.input['err'] == null ? "border-[#e4e4f3] border-2" : "border-[#ef4444] border-b-[1px]"
        },

        placeholderColor() {
            return this.input['err'] != "" && this.input['err'] == null ? "placeholder-[#b6b6d9]" : "placeholder-[#ef446cb8]"
        }


    }
}
</script>