<template>
    <div>
      <component :width="width" :is="component" />
    </div>
  </template>
  
  <script>
  export default {
    props:['component','width'],

  };
  </script>