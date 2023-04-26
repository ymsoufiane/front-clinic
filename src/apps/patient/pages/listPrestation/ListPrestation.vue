<template>
    <TableDashboard :columns="getColsName" :rows="getRows" />
</template>

<script>
import TableDashboard from '@/components/tables/TableDashboard.vue'
import allergyTable from '../../json/tables/prestation_table'
import getCategoriePrestation from '../../mixin/getCategoriePrestation';
export default {
    name: "ListAllergy",
    mixins:[getCategoriePrestation],
    components: { TableDashboard },
    created(){
        allergyTable.forEach(async(col)=>{
            if(col['name']=="Categorie"){
                col['filter']['options']=await this.getOptionsCategoriesPrestation()
            }
        })
    },
    mounted() {
        this.$store.commit('table/setPath', "patientService/prestation/prestations")
        this.$store.commit('table/setPathExportData',"patientService/prestation/export/")
    },

    computed: {

        getColsName() {
            return allergyTable
        },

        getRows() {
            let rows= this.$store.getters['table/getRows']
            rows.forEach((row)=>{
                if(row['prestationCategorie'])
                    row['categorie']=row['prestationCategorie']['label']
            })
            return rows
        },
    },

    methods: {

    }
}


</script>

