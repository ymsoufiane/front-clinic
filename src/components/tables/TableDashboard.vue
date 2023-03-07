<template>
    <InputFilterDashboard />
    <table class="w-full shadow-sm rounded-xl text-start">
        <thead class="bg-[#f8f9fa]">
            <tr class="border-b">
                <th v-for="(column, index) in columns" @click="OrderBy(column)"
                    :class="{ 'cursor-pointer': column['type'] == 'text' }"
                    class="p-2  pl-4 text-xs text-start text-[#64748b] font-semibold" :key="index">
                    <div class="flex">
                        {{ column['name'] }}
                        <DownIcon stroke="#64748b" fill="#64748b" width="20px" v-if="showIconOrderBy(column) == 'DSC'" />
                        <UpIcon stroke="#64748b"  width="20px" v-if="showIconOrderBy(column) == 'ASC'" />
                    </div>

                </th>
            </tr>
        </thead>
        <tbody class="bg-white">
            <tr class="border-b" >
                <td class="p-2 pl-4 text-sm" v-for="(column, columnIndex) in columns" :key="columnIndex">
                    <GenericInput v-if="column['filter']['type']!=null" :input="column['filter']" />
                </td>
            </tr>

            <tr class="border-b" v-for="(row, rowIndex) in rows" :key="rowIndex">
                <td class="p-2 pl-4 text-sm" v-for="(column, columnIndex) in columns" :key="columnIndex">
                    <span v-if="column['type'] == 'text'">
                        {{ row[column['champ']] }}
                    </span>
                    <div class="flex" v-if="column['type'] == 'action'">
                        <div class="w-min" v-for="(action, index) in column['actions']" @click="runAction(action, row)"
                            :key="index">
                            <EditIcon v-if="action['name'] == 'edit'" class="icon-form cursor-pointer m-0" />
                            <DeleteIcon v-if="action['name'] == 'delete'" class="icon-form cursor-pointer m-0 fill-white" />
                            <div v-if="action['name'] == 'toggle'">
                                <ToggleButton :value="row[action['champ']]" :id="row[action['id']]" />
                            </div>
                        </div>
                    </div>
                    <div v-if="column['type'] == 'image'" class="flex justify-center ">
                        <img :width="column['width']" :height="column['height']" :src="row[column['champ']]" alt="">
                    </div>

                </td>
            </tr>
        </tbody>
    </table>
</template>
  
<script>
import EditIcon from '@/components/icons/EditIcon.vue';
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
import ToggleButton from '@/components/buttons/ToggleButton.vue'
import InputFilterDashboard from '@/components/inputs/InputSearchTables.vue'
import DownIcon from '../icons/DownIcon.vue';
import UpIcon from '../icons/UpIcon.vue';
import GenericInput from '../inputs/GenericInput.vue';

export default {

    name: 'TableDahboard',
    components: { EditIcon, DeleteIcon, ToggleButton, InputFilterDashboard, DownIcon,UpIcon,GenericInput },
    data: function () {
        return {

        }
    },
    methods: {
        runAction(action, row) {
            const payload = new Map()
            payload.set("data", row)
            if (action['type'] == 'mutation') {
                this.$store.commit(action['method'], payload)
            } else if (action['type'] == 'action') {
                this.$store.dispatch(action['method'], payload)
            }
        },
        OrderBy(column) {
            const currentOrderByColumn = this.$store.getters['table/getOrderBy']
            const payload = {}
            payload['name'] = column['name']
            if (currentOrderByColumn['name'] == column['name']) {
                payload['order'] = currentOrderByColumn['order'] == 'DSC' ? 'ASC' : 'DSC'
            } else {
                payload['order'] = 'ASC'
            }
            this.$store.commit('table/setOrderBy', payload)
        },
        showIconOrderBy(column) {
            const currentOrderByColumn = this.$store.getters['table/getOrderBy']
            if (currentOrderByColumn['name'] == column['name']) {
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
    }
}
</script>
  