
<template>
  <div  class="bg-white grid  shadow-sm rounded px-8 py-2 text-center" :class="getGridClass">
    <div class="col-span-1" v-for="(item,index) in items" :key="index">{{ item }}</div>
  </div>
</template>

<script>
export default {

  name: 'LineTable',
  props:['items'],
  data: function () {
    return {

    }
  },
  computed: {
    getGridClass(){
      console.log("grid-cols-"+this.items.length)
      return "grid-cols-"+this.items.length
    }
  }
}

</script>