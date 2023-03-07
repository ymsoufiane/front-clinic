<template>
   <div class="grid grid-cols-3 h-full">
        <div class="col-span-1 grid content-center h-full px-4">
            <MenuIcon @click="changeEtat" class="cursor-pointer" width="25px" height="25px" fill="#64748b" />
        </div>
        <div class="col-span-2 grid content-center h-full justify-end mr-24">
            <DropDown class="" />
        </div>
   </div>
</template>

<script>

import MenuIcon from '../icons/MenuIcon.vue';
import DropDown from './DropDown.vue';
export default {
  name: 'NavDashboard',
    components:{MenuIcon,DropDown},
    methods:{
        changeEtat(){
            this.$store.commit('aside/changeEtat')
        }
    }
  
}
</script>
