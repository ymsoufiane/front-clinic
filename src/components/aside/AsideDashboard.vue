<template>
    <div class="overflow-y-auto h-screen bg-[#0f172a]">
        <div class="aside-head h-[250px] bg-black">
           <!--   user info -->
        </div>
        <div class="body">
            <AsideGroupItem v-for="(group, index) in groups" :group="group" :groupIndex="index" :key="index" />
        </div>
    </div>
</template>

<script>
import AsideGroupItem from './AsideGroupItem.vue';
import store from '@/store';
export default {
    name: 'AsideDashboard',
    components: { AsideGroupItem },
    data() {
        return {
            
        }
    },
    computed:{
        groups(){
            console.log("computed")
            return store.getters["aside/getGroups"]
        }
    },
    

}
</script>