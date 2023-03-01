
<template>
  <div class="bg-white grid shadow-sm rounded px-8 py-2 text-start " :class="getGridClass">
    <div class="col-span-1" v-for="(item,index) in items" :key="index">{{ item }}</div>
    <div v-if="type=='title'" class="col-span-1">Action</div>
    <div v-else  class="col-span-1" >
      <EditIcon class="icon-form cursor-pointer" />
    </div>
  </div>
</template>

<script>
import EditIcon from '@/components/icons/EditIcon.vue';
export default {

  name: 'LineTable',
  props:['items','type'],
  components:{EditIcon},
  computed: {
    getGridClass(){
      return "grid-cols-"+(this.items.length+1)
    }
  }
}

</script>