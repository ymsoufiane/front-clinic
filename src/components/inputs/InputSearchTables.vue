<template>
    <div class="flex justify-between py-4">
        <div class="flex">
            <div class="py-2 pr-2 text-sm text-[#333] font-normal">
                Items per page:
            </div>
            <InputSelect @changeValue="setPageSize" :input="inputSelect" />
        </div>
        <div>
            <div class="grid grid-cols-3 text-sm text-[#333] font-normal">
                <div @click="exportData(item)" v-for="item,index in exportsItems" :key="index" class="border-[#e4e4f3] border-2 p-2 cursor-pointer">{{item['name']}}</div>
            </div>
        </div>
        <div class="flex h-10 bg-white shadow-md rounded-md ml-4">
            <div class="flex align-content-center">
                <input @input="submit($event)" type="text" class="px-4 py-2 outline-none w-52" placeholder="Search ..."
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
    components: { SearchIcon, InputSelect },
    mounted() {

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
                { 'name': 'Excel',"type":"excel","fileName":"file.xlsx" },
                { 'name': 'Pdf',"type":"pdf","fileName":"file.pdf" },
                { 'name': 'Csv',"type":"csv","fileName":"file.csv" },

            ]

        }
    },
    computed: {
        inputSelect(){
            return {
                options:this.showEntries,
                placeholder:"10"
            }
        }
    },
    methods: {
        setPageSize(event){
            console.log("set page size")
            this.$store.commit('table/setPageSize',event['value'])
            this.$store.commit('table/loadData')
        },
        submit(event) {
            const value = event.target.value
            this.$store.commit('table/setSearch', value)

        },
        exportData(payload){
            this.$store.commit('table/exportData',payload)
        },
    }

}

</script>