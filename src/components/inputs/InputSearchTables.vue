<template>
    <div  class="search flex justify-end py-4">
        <div  class="flex bg-white shadow-md rounded-md ml-4">
            <div class="flex align-content-center">
                <input @change="submit($event)" type="text" class="px-4 py-2 outline-none w-52" placeholder="Search ..."
                    name="" id="">
            </div>
            <div class="flex content-center px-2 ">
                <SearchIcon width="20px" />
            </div>
        </div>
    </div>
</template>

<script>
import SearchIcon from '@/components/icons/SearchIcon.vue'
export default {
    name: "InputFilterDashboard",
    inject: ['filter'],
    components: { SearchIcon },
    mounted() {
        if(this.haveFilter)
        {
            const path = this.filter['path']
            this.$store.commit('table/setPath', path)
            const event={
                target:{
                    value:this.filter['items'][0]['champ']
                }
            }
            this.selectItem(event)

        }
    },
    data: function () {
        return {
            selected: '',
            type: '',
            selectItems: [],
            placeholder:''
        }
    },
    computed:{

    },
    methods: {
        
        submit(event) {
            const value = event.target.value
            this.$store.commit('table/setFilterValue', value)

        }
    }

}

</script>