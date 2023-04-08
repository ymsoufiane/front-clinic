<template>
    <InputSearchTables />

    <table class="w-full shadow-sm rounded-xl text-start">
        <thead class="bg-[#f8f9fa]">
            <tr class="border-b">
                <th v-for="(column, index) in columns" @click="orderBy(column)"
                    :class="{ 'cursor-pointer': column['type'] == 'text' }"
                    class="p-2 text-xs text-start text-[#64748b] font-semibold" :key="index">
                    <div class="flex">
                        {{ column['name'] }}
                        <DownIcon stroke="#64748b" fill="#64748b" width="20px" v-if="showIconOrderBy(column) == 'desc'" />
                        <UpIcon stroke="#64748b" width="20px" v-if="showIconOrderBy(column) == 'asc'" />
                    </div>

                </th>
            </tr>
        </thead>
        <tbody class="bg-white">
            <tr class="border-b">
                <td class="p-2 text-sm" v-for="(column, columnIndex) in columns" :key="columnIndex">
                    <GenericInput @changeValueInput="filter($event, column['filter'])" v-if="column['filter']['type'] != null"
                        :input="column['filter']" />
                </td>
            </tr>

            <tr class="border-b" v-for="(row, rowIndex) in rows" :key="rowIndex">
                <td class="p-2 text-sm" v-for="(column, columnIndex) in columns" :key="columnIndex">
                    <span v-if="column['type'] == 'text'">
                        {{ row[column['champ']] }}
                    </span>
                    <div class="flex" v-else-if="column['type'] == 'action'">
                        <div class="w-min" v-for="(action, index) in column['actions']" 
                            :key="index">
                            <EditIcon @click="runAction(action, row)" v-if="action['name'] == 'edit'" class="icon-form cursor-pointer m-0" />
                            <DeleteIcon @click="runAction(action, row)"  v-if="action['name'] == 'delete'" class="icon-form cursor-pointer m-0 fill-white" />
                            <div v-if="action['name'] == 'toggle'">
                                <ToggleButton @change="runAction(action, row)" :value="row[action['champ']]" :id="row[action['id']]" />
                            </div>
                        </div>
                    </div>
                    <div v-else-if="column['type'] == 'image'" class="flex justify-center ">
                        <img :width="column['width']" :height="column['height']" :src="row[column['champ']]" alt="">
                    </div>

                </td>
            </tr>
        </tbody>
    </table>
    <div class="py-4">
        <PaginationComponent :total-items="totalItems" :items-per-page="itemsPerPage" :currentPage="currentPage"
            @page-changed="onPageChanged" />
    </div>
</template>
  
<script>
import EditIcon from '@/components/icons/EditIcon.vue';
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
import ToggleButton from '@/components/buttons/ToggleButton.vue'
import InputSearchTables from '@/components/inputs/InputSearchTables.vue'
import PaginationComponent from '@/components/pagination/PaginationComponent.vue';
import DownIcon from '../icons/DownIcon.vue';
import UpIcon from '../icons/UpIcon.vue';
import GenericInput from '../inputs/GenericInput.vue';

export default {

    name: 'TableDahboard',
    components: { EditIcon, DeleteIcon, ToggleButton, InputSearchTables, DownIcon, UpIcon, GenericInput, PaginationComponent },
    data: function () {
        return {
            isLoading: true,
        }
    },
    computed: {
        totalItems() {
            return this.$store.getters['table/getTotalPages'] * this.itemsPerPage
        },
        currentPage() {

            return this.$store.getters['table/getCurrentPage']
        },
        itemsPerPage() {
            return this.$store.getters['table/getPageSize']
        }
    },
    methods: {
        onPageChanged(page) {
            this.$store.commit('table/setCurrentPage', page)
            this.$store.commit('table/loadData')
        },
        runAction(action, row) {
            row['data'] = action['data']
            if (action['type'] == 'mutation') {
                this.$store.commit(action['method'], row)
            } else if (action['type'] == 'action') {
                this.$store.dispatch(action['method'], row)
            }
        },

        orderBy(column) {
            const currentOrderByColumn = this.$store.getters['table/getOrderBy']
            const payload = {}
            payload['name'] = column['filter']['champ']
            if (currentOrderByColumn['name'] == column['filter']['champ']) {
                payload['order'] = currentOrderByColumn['order'] == 'desc' ? 'asc' : 'desc'
            } else {
                payload['order'] = 'asc'
            }
            this.$store.commit('table/setOrderBy', payload)
        },
        filter(event, filter) {

            const payload = {
                "value": event['value'],
                "champ": event['input']['champ'],
                "op": event['input']['op']
            }

            if (filter['type'] == 'select')
                payload['value'] = event['value']['value']

            if(filter['isCustomFilter'])
                this.$store.commit('table/addCustomFilter', payload)
            else
                this.$store.commit('table/addFilter', payload)

        },
        showIconOrderBy(column) {
            const currentOrderByColumn = this.$store.getters['table/getOrderBy']
            if (currentOrderByColumn['name'] == column['champ']) {
                return currentOrderByColumn['order']
            }
            return ''
        },


    },
    props: {
        columns: {
            type: Array,
            required: true
        },
        rows: {
            type: Array,
            required: true
        },
        thClass: {
            type: String
        },
        tdClass: {
            type: String
        },
        trClass: {
            type: String
        },
        theadClass: {
            type: String
        },
        tbodyClass: {
            type: String
        },
        tableClass: {
            type: String
        },
    },
   
}
</script>
  