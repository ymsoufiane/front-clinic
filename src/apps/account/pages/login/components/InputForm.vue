<template>
    <div class="py-2">
        
        <div :class="colorBorder"  class=" py-2">
            <span>
                <slot name="icon"></slot>
            </span>
            <input :class="placeholderColor" class="outline-0 w-10/12  bg-slate-50 pl-2 ply-2  text-base text-[#000000de] font-light"
                :type="type" :placeholder="placeholder"  @input="handleInput">
        </div>
        <div class="text-[#ef4444] text-start">
                {{ err }}
        </div>
    </div>
</template>
<script>


export default {
    name: 'InputForm',
    props: ['type', 'placeholder','value','err'],

    methods: {
    handleInput (e) {
      this.$emit('input', e)
    },
  },
  computed:{
    colorBorder(){
      return this.err!=""&&this.err==null?"border-[#e4e4f3] border-b-2":"border-[#ef4444] border-b-[1px]"
    },
    placeholderColor(){
      return this.err!=""&&this.err==null?"placeholder-[#b6b6d9]":"placeholder-[#ef446cb8]"
    }


  }
}
</script>