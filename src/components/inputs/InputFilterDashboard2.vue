<template>
    <div class="search flex justify-end py-4">
        <div @click="changeEtatFilter" class="p-2 bg-[#4f46e5] cursor-pointer rounded">
            <FilterIcon width="25px" color="white" />
        </div>
        <div class="flex bg-white shadow-md rounded-md ml-4">
            <div class="flex align-content-center">
                <input type="text" class="px-4 py-2 outline-none w-52" placeholder="Search ..." name="" id="">
            </div>
            <div class="flex content-center px-2 ">
                <SearchIcon width="20px" />
            </div>
        </div>
    </div>
    <div v-if="filterIsActive" class="mb-2">
        <FormDashboard :cols="cols" :inputs="inputs" />
    </div>
</template>

<script>
import SearchIcon from '@/components/icons/SearchIcon.vue'
import FilterIcon from '../icons/FilterIcon.vue'
import FormDashboard from '../form/FormDashboard.vue'

export default {
    name: "InputFilterDashboard2",
    inject: ['filter'],
    components: { SearchIcon, FilterIcon, FormDashboard },

    data: function () {
        return {
            filterIsActive:false,
            cols:"sm:grid-cols-2 lg:grid-cols-5",
            inputs: [
                { "type": "text", "name": "first_name", "placeholder": "First name..", "title": "", },
                { "type": "text", "name": "last_name", "placeholder": "Last name", "title": "", },
                { "type": "text", "name": "last_name", "placeholder": "Username", "title": "", },
                { "type": "text", "name": "email", "placeholder": "Email", "title": "", },
                { "type": "text", "name": "phone_number", "placeholder": "Phone number", "title": "", },
                { "name":"submit","type": "submit", "text": "Applique Filter" },
            ]
        }
    },
    computed: {
        haveFilter() {
            if (this.filter && this.filter['items'])
                return this.filter['items'].length > 0
            return false
        }
    },
    methods: {
        changeEtatFilter(){
            this.filterIsActive=!this.filterIsActive
        }
    }

}

</script>