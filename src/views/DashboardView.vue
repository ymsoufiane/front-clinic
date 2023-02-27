<template>
    <div class="grid lg:grid-cols-5 md:grid-cols-10 sm:grid-cols-8 ">
        <div v-if="isOpen" class="lg:col-span-1 md:col-span-3 sm:col-span-3 ">
            <AsideDashboard />
        </div>
        <div :class="getClassMain" class="border-[#e8e8e8] border-b-2  h-16">
            <NavDahboard />
            <div class="main bg-[#f1f5f9] h-screen p-8">
                <div v-if="showDashboard">
                    dashboard
                </div>
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
import AsideDashboard from '../components/aside/AsideDashboard.vue'
import NavDahboard from '../components/nav/NavDahboard.vue';

export default {
    name: 'DashboardVue',
    components: { NavDahboard, AsideDashboard },
    computed:{
        isOpen(){
            return this.$store.getters["aside/getEtat"]
        },
        getClassMain(){
            
            if (this.isOpen){
                return "lg:col-span-4 md:col-span-7 sm:col-span-5"
            }
            return "lg:col-span-5 md:col-span-10 sm:col-span-8"
           
        },
        showDashboard(){
            return this.$route.path=="/dashboard"
        }   
    }

}
</script>
  