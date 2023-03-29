<template>
    <div class="flex justify-center">
        <ul class="flex border border-gray-300 rounded-md">
            <li class="px-4 py-2 bg-white border-r border-gray-300 cursor-pointer hover:bg-gray-100" v-if="currentPage > 1"
                @click="goToPage(currentPage - 1)">
                Previous
            </li>
            <li class="px-4 py-2 bg-white border-r border-gray-300 cursor-pointer hover:bg-gray-100"
                v-for="pageNumber in pageNumbers()" :key="pageNumber" :class="{ 'font-bold': pageNumber == currentPage }"
                @click="goToPage(pageNumber)">
                {{ pageNumber }}
            </li>
            <li class="px-4 py-2 bg-white border-gray-300 cursor-pointer hover:bg-gray-100" v-if="currentPage < totalPages"
                @click="goToPage(currentPage + 1)">
                Next
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'PaginationComponent',
    data: function () {
        return {
            currentMax: 10,
            currentMin: 1
        }
    },
    props: {
        totalItems: {
            type: Number,
            required: true,
        },
        itemsPerPage: {
            type: Number,
            default: 10,
        },
        currentPage: {
            type: Number,
            default: 1,
        },

    },

    computed: {
        totalPages() {
            return Math.ceil(this.totalItems / this.itemsPerPage);
        },


        currentStart() {
            if (this.currentMin >= this.currentPage) {
                let min = this.currentMin - 5
                return min < 1 ? 1 : min
            }
            return this.currentMin
        },
        currentEnd() {
            if (this.currentMax <= this.currentPage) {
                let max = this.currentMax + 5
                return max > this.totalPages ? this.totalPages : max
            }else if(this.currentMax>this.totalPages){
                return this.totalPages
            }
            return this.currentMax
        },

    },
    methods: {
        goToPage(pageNumber) {
            this.$emit('page-changed', pageNumber);
        },
        pageNumbers() {

            const pagesArray = [];
            let start = this.currentStart
            let end = this.currentEnd
            if (end > this.currentMax) {
                this.currentMax = end
                this.currentMin = end - 10
                start = this.currentMin
            }

            if (start < this.currentMin) {
                this.currentMin = start
                this.currentMax=start+5<10?10:start+10
                end=this.currentMax

            }

            for (let i = start; i <= end; i++) {
                pagesArray.push(i);
            }
            return pagesArray;
        },
    },
};
</script>

  