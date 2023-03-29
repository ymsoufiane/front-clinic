<template>
    <div class="overflow-y-auto h-full bg-[#0f172a]">

        <div class="body py-4">
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
            return store.getters["aside/getGroups"]
        }
    },
    

}
</script>