<template>
    <button class="bg-[#4f46e5] text-[color:white] my-4 w-full p-2 rounded-full text-base font-normal" :type="type"> 
        {{ text }}
    </button>
</template>
  
<script>


export default {
    name: 'SubmitButton',
    props:['type','text']

}
</script>
  