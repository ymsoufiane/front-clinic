<template>
    <div class="absolute w-full h-full flex items-center justify-center" >
        <loading  :active="isLoading"></loading>
    </div>
</template>
<script>

import Loading from 'vue-loading-overlay';
export default {
    components:{Loading},
    name: 'LoadingComponent',
    props: ['isLoading'],

    methods: {
        
    },
    computed: {

    }
}
</script>