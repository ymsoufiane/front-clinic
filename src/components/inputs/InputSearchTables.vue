<template>
    <div class="flex justify-between py-4">
        <div class="flex">
            <div class="py-2 pr-2 text-sm text-[#333] font-normal">
                Items per page:
            </div>
            <InputSelect @change="setPageSize" placeholder="10" :options="showEntries" />
        </div>
        <div>
            <div class="grid grid-cols-3 text-sm text-[#333] font-normal">
                <div v-for="item,index in exportsItems" :key="index" class="border-[#e4e4f3] border-2 p-2 cursor-pointer">{{item['name']}}</div>
               
            </div>
        </div>
        <div class="flex h-10 bg-white shadow-md rounded-md ml-4">
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
import InputSelect from './InputSelect.vue'
export default {
    name: "InputFilterDashboard",
    inject: ['filter'],
    components: { SearchIcon, InputSelect },
    mounted() {
        if (this.haveFilter) {
            const path = this.filter['path']
            this.$store.commit('table/setPath', path)
            const event = {
                target: {
                    value: this.filter['items'][0]['champ']
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
            placeholder: '',
            showEntries: [
                { 'name': '5',"value":5},
                { 'name': '10',"value":10},
                { 'name': '25',"value":25 },
                { 'name': '50',"value":50 },
                { 'name': '75',"value":75 },
                { 'name': '100',"value":100 },
            ],
            exportsItems: [
                { 'name': 'Excel' },
                { 'name': 'Pdf' },
                { 'name': 'Csv' },

            ]

        }
    },
    computed: {

    },
    methods: {
        setPageSize(event){
            this.$store.commit('table/setPageSize',event['value'])
            this.$store.commit('table/loadData')
        },
        submit(event) {
            const value = event.target.value
            this.$store.commit('table/setFilterValue', value)

        }
    }

}

</script>