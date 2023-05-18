<template>
    <div class="min-h-screen bg-[#f1f5f9] h-full grid lg:grid-cols-5 md:grid-cols-10 sm:grid-cols-8 ">
        <transition>
            <div v-if="isOpen" class="lg:col-span-1 md:col-span-3 sm:col-span-3 ">
                <AsideDashboard />
            </div>
        </transition>
        <div :class="getClassMain" class="border-[#e8e8e8] border-b-2">
            <NavDahboard class="bg-white" />
            <loading v-show="isLoading" :isLoading="isLoading"></loading>
            <Breadcrumb :breadcrumbs="breadcrumb" />
            <div :v-show="!isLoading" class=" px-8 ">
                <div v-if="showDashboard">
                    <DefaultDashboard />
                </div>
                <router-view />
            </div>
        </div>
    </div>
</template>
<script>
import AsideDashboard from '../components/aside/AsideDashboard.vue'
import NavDahboard from '../components/nav/NavDahboard.vue';
import Loading from '@/components/general/Laoding.vue';
import Breadcrumb from '@/components/BreadCrumb.vue';
import DefaultDashboard from './DeafultDashboard.vue';

export default {
    name: 'DashboardVue',
    components: { Loading, NavDahboard, AsideDashboard, Breadcrumb,DefaultDashboard },
    data() {
        return {
           
        }
    },
    computed: {
        breadcrumb(){
            return this.$route.path.split("/")
        },
        isOpen() {
            return this.$store.getters["aside/getEtat"]
        },

        getClassMain() {

            if (this.isOpen) {
                return "lg:col-span-4 md:col-span-7 sm:col-span-5"
            }
            return "lg:col-span-5 md:col-span-10 sm:col-span-8"

        },
        showDashboard() {
            return this.$route.path == "/dashboard"
        },
        isLoading() {
            return this.$store.getters['table/isLoading']
        }

    }

}
</script>
<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
  