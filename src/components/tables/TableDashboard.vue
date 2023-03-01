<template>
    <InputFilterDashboard placeholder="Search ..." />
    <table  class="w-full shadow-sm rounded-xl text-start">
        <thead class="bg-[#f8f9fa]">
            <tr class="border-b">
                <th v-for="(column, index) in columns" class="p-2 pl-4 text-xs text-start text-[#64748b] font-semibold" :key="index">{{ column['name'] }}</th>
            </tr>
        </thead>
        <tbody class="bg-white">
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
import InputFilterDashboard from '@/components/inputs/InputFilterDashboard.vue'
export default {
    
    name: 'TableDahboard',
    components: { EditIcon, DeleteIcon, ToggleButton,InputFilterDashboard },
    methods: {
        runAction(action, row) {
            const payload = new Map()
            action['param'].forEach((item) => {
                payload.set(item,row[item])
            })

            if (action['type'] == 'mutation') {
               
                this.$store.commit(action['method'],payload)
            } else if (action['type'] == 'action') {
                console.log(action['method'])
                this.$store.dispatch(action['method'],payload)
            }
        }
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
  