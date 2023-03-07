<template>
  <div class="px-2">
    <div class="title text-lg pt-4 font-semibold text-[#648cf8] ">{{ group.title }}</div>
    <div v-for="(item, index) in group.items" :key="index">
      <AsideItem :item="item" :itemIndex="index" />
    </div>

  </div>
</template>

<script>


import AsideItem from './AsideItem.vue';
export default {
  name: 'AsideGroupItem',
  components: { AsideItem },
  props: ['title', 'group', 'groupIndex'],
  
  provide() {
    return {
      groupIndex: this.groupIndex
    }
  }

}
</script>
