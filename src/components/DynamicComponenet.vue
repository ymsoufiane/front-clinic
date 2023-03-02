<template>
    <div>
      <component :fill="fill" :width="width" :is="component" />
    </div>
  </template>
  
  <script>
  export default {
    mounted(){
   
      console.log(this.component)
    },
    props:['component','width','fill'],

  };
  </script>