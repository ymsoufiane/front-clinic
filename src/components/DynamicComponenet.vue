<template>
    <div>
      <component :fill="fill" :width="width" :is="component" />
    </div>
  </template>
  
  <script>
  export default {

    props:['component','width','fill'],

  };
  </script>