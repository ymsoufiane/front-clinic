<template>
   <div class="grid grid-cols-2 h-full">
        <div class="col-span-1 grid content-center h-full px-4">
            <MenuIcon @click="changeEtat" class="cursor-pointer" width="25px" height="25px" fill="#64748b" />
        </div>
        <div class="col-span-1 grid content-center h-full ">
            icons
        </div>
   </div>
</template>

<script>

import MenuIcon from '../icons/MenuIcon.vue';
export default {
  name: 'NavDashboard',
    components:{MenuIcon},
    methods:{
        changeEtat(){
            this.$store.commit('aside/changeEtat')
        }
    }
  
}
</script>
