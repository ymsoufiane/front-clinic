<template>
    <div v-if="haveFilter"  class="search flex justify-end py-4">
        <div class="bg-white shadow-md rounded-md w-52 ">
            <select @change="selectItem($event)"
                class="w-full text-[#64748b] py-2 px-4 outline-none border-none focus:border-none focus:outline-none" name="" id="">
                <option value="">Filter par ...</option>
                <option v-for="(item, index) in filter.items" :key="index" :value="item['champ']">{{ item['name'] }}
                </option>
            </select>
        </div>

        <div v-if="type == 'text'" class="flex bg-white shadow-md rounded-md ml-4">
            <div class="">
                <input @change="submit($event)" type="text" class="py-2 px-4 outline-none w-60" :placeholder="placeholder"
                    name="" id="">
            </div>
            <div class="flex content-center px-2 ">
                <SearchIcon width="20px" />
            </div>
        </div>
        <div v-if="type == 'select'" class="bg-white shadow-md rounded-md w-52 ml-4">
            <select @change="submit($event)" 
                class="w-full text-[#64748b] py-2 px-4 outline-none border-none focus:border-none focus:outline-none" name="" id="">
                <option value="">Select ...</option>
                <option v-for="(item, index) in selectItems" :key="index" :value="item">{{ item }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
import SearchIcon from '@/components/icons/SearchIcon.vue'
export default {
    name: "InputFilterDashboard",
    props: ['placeholder'],
    inject: ['filter'],
    components: { SearchIcon },
    mounted() {
        if(this.haveFilter)
        {
            const path = this.filter['path']
            this.$store.commit('table/setPath', path)
        }
    },
    data: function () {
        return {
            selected: '',
            type: '',
            selectItems: []
        }
    },
    computed:{
        haveFilter(){
            if(this.filter&&this.filter['items'])
                return this.filter['items'].length>0
            return false
        }
    },
    methods: {
        selectItem(event) {
            const value = event.target.value
            this.selected = value
            
            if(value==""){
                this.selected=''
                this.type=''
                this.selectItems=[]
                this.commit('table/clearFilter')
                return 
            }
            this.$store.commit('table/setFilterChamp', value)
            for (let i = 0; i < this.filter['items'].length; i++)
                if (this.filter['items'][i]['champ'] == value) {
                    this.type = this.filter['items'][i]['type']
                    if (this.filter['items'][i]['type'] == 'select') {
                     
                        this.selectItems = this.filter['items'][i]['values']
                    }
                    break
                }
        },
        submit(event) {
            const value = event.target.value
            this.$store.commit('table/setFilterValue', value)

        }
    }

}

</script>