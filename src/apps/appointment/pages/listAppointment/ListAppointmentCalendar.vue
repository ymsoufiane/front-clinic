<template>
    <AppointmentFilter @departmentChanged="handlDepartementChanged" @doctorChanged="handlDoctorChanged" :doctors="doctors"
        :departments="departments" />

    <AppointmentScheduler :appointments="appointments" />
</template>

<script>
import AppointmentScheduler from '../../components/AppointmentScheduler.vue';
import AppointmentFilter from '../../components/AppointmentFilter.vue';
import getAppointmentData from '../../mixin/getAppointmentData.js';
import Api from '@/api';
export default {
    name: 'ListAppointment',
    mixins: [getAppointmentData],
    components: {
        AppointmentScheduler,
        AppointmentFilter
    },
    async created() {
        this.departments = await this.getDepartementsOptions();
    },
    data() {

        return {
            doctors: [],
            departments: [],
            appointments: []
        }
    },
    methods: {
        async handlDepartementChanged(departmentid) {
            this.doctors = await this.getDoctorByDepartement(departmentid);
        },
        handlDoctorChanged(doctorid) {
            if (doctorid != 0)
                this.getAppointmentDoctor(doctorid);
            else
                this.appointments = [];
            console.log(this.appointments)
        },
        async getAppointmentDoctor(doctorid) {
            const response = await Api.get("appointmentService/appointment/getAppointmentsByDoctorIdOfTowMonth/" + doctorid);
            this.appointments = response.data.Data.map((appointment) => {
                let date = new Date(appointment.date)

                return {
                    title: appointment.Patient.firstName + " " + appointment.Patient.lastName,
                    start:this.formatDate(date) + "T" + appointment.startHour,
                    end: this.formatDate(date) + "T" + appointment.endHour,
                    room: appointment.Room,
                    patient: appointment.Patient,
                    doctor: appointment.Doctor,
                    appointmentId: appointment.id
                }
            })
            console.log(this.appointments)
        },
        formatDate(date) {
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
    },


}
</script>