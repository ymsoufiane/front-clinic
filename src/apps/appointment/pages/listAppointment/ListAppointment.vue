<template>
    <TableDashboard :columns="getColsName" :rows="getRows">
        <template v-slot:search_section>
            <div @click="goToCalendar" class="p-2 bg-[#2c3e50] cursor-pointer rounded">
                <FilterIcon width="25px" height="25px"  />
            </div>
        </template>
    </TableDashboard>
</template>

<script>
import TableDashboard from '@/components/tables/TableDashboard.vue'
import colsTable from '../../json/tables/appointment_table.json'
import FilterIcon from '@/components/icons/CalendarIcon.vue'
export default {
    name: "ListAppointment",
    components: { TableDashboard, FilterIcon },
    created() {
        this.$store.commit('table/setPath', "appointmentService/appointment/getAppointments")
        this.$store.commit('table/setPathExportData', "appointmentService/appointment/export/")
    },

    data: function () {
        return {

        }
    },
    computed: {

        getColsName() {
            return colsTable
        },

        getRows() {
            let appointments = this.$store.getters['table/getRows']
            let etatColors={
                "green": "text-[#0ac074]",
                "red": "text-[#e74c3c]",
                "bleu": "text-[#6571ff]",
            }
            return appointments.map((appointment) => {

                return {
                    "date": new Date(appointment["date"]).toLocaleDateString(),
                    "startHour": appointment["startHour"],
                    "endHour": appointment["endHour"],
                    "room":  appointment["Room"]["label"],
                    "doctor": appointment["Doctor"]["firstName"] + " " + appointment["Doctor"]["lastName"],
                    "patient": appointment["Patient"]["firstName"] + " " + appointment["Patient"]["lastName"],
                    "departement": appointment["Room"]['Departement']["departement"],
                    "phoneNumber": appointment["Patient"]["phoneNumber"],
                    "iconColor": etatColors[appointment["etat"]],
                    "confirmIconColor": appointment["etat"]=="pending"?etatColors["bleu"]:etatColors["green"],
                    "etat": appointment["etat"],
                    "showConfirmIcon": (appointment["etat"]!="absent"  && appointment["etat"]!="canceled"),
                    "showCancelIcon": appointment["etat"]=="pending",
                    "showDeleteIcon":(appointment["etat"]=="absent"  || appointment["etat"]=="canceled"),
                }
            })


        },
    },

    methods: {
        goToCalendar(){
            this.$router.push({ name: 'listAppointmentCalendar' })
        }
    }
}


</script>

