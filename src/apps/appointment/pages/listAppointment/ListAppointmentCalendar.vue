<template>
    <AppointmentFilter @departmentChanged="handlDepartementChanged" @doctorChanged="handlDoctorChanged" :doctors="doctors"
        :departments="departments" />
    <AppointmentScheduler @dateClick="handleDateClick" @eventClick="handleEventClick" :appointments="appointments" />
    <Popup @close="close" :isOpen="popupOpenAppointment">
        <FormDashboard @changeForm="updateDataHandler" :alertInfo="alertAddAppointment" @submitForm="submit" :inputs="inputs" />
    </Popup>
    <Popup @close="closeAppointmentInfo" :isOpen="popupAppointmentInfo">
        <AppointmentInfo :appointment="appointmentInfo" />
    </Popup>
</template>

<script>
import AppointmentScheduler from '../../components/AppointmentScheduler.vue';
import AppointmentFilter from '../../components/AppointmentFilter.vue';
import getAppointmentData from '../../mixin/getAppointmentData.js';
import addAppointment from "@/apps/appointment/mixin/addAppointment"

import Popup from '@/components/popup/PopupComponent.vue';
import FormDashboard from '@/components/form/FormDashboard.vue';
import appointmentForm from '../../json/forms/appointment_form.json';
import AppointmentInfo from '../../components/AppointmentInfo.vue';
import Api from '@/api';


export default {
    name: 'ListAppointment',
    mixins: [getAppointmentData,addAppointment],
    components: {
        AppointmentScheduler,
        AppointmentFilter,
        Popup,
        FormDashboard,
        AppointmentInfo
    },
    async created() {
        this.departments = await this.getDepartementsOptions();
        this.patients=await this.getPatientsOptions();
        this.inputs.forEach((input) => {
            if(input['name']=='departementId'){
                input['options']=this.departments
            }else if(input['name']=='patientId'){
                input['options']=this.patients
            }
        });
    },
    data() {
        return {
            alertAddAppointment: {},
            appointmentInfo: {},
            inputs: [...appointmentForm],
            popupOpenAppointment: false,
            popupAppointmentInfo: false,
            doctors: [],
            departments: [],
            appointments: [],
            selectedDepartment: 0,
            selectedDoctor: 0,


        }
    },
    methods: {
        close() {
            this.popupOpenAppointment = false
        },
        closeAppointmentInfo() {
            this.popupAppointmentInfo = false
        },
        handleDateClick(info) {
            let departement=this.getDepartementsOptionById(this.selectedDepartment)
            let doctor=this.getDoctorById(this.selectedDoctor)
            let initData = {"doctorId":doctor,"departementId":departement,"date":info.dateStr}
            this.$store.commit('form/setInitData', initData)
            this.popupOpenAppointment=true
            console.log(info)
        },
        handleEventClick(info) {
            console.log("=====>>>>>>")
            let data=info.event.extendedProps  
            this.appointmentInfo=data
            console.log(data)
            this.popupAppointmentInfo = true
           
        },
        getDepartementsOptionById(departementId) {
            return this.departments.find((department) => department.value == departementId)
        },
        getDoctorById(doctorId) {
            return this.doctors.find((doctor) => doctor.value == doctorId)
        },
        async handlDepartementChanged(departmentid) {
            this.selectedDepartment = departmentid;
            this.doctors = await this.getDoctorByDepartement(departmentid);
        },
        handlDoctorChanged(doctorid) {
            this.selectedDoctor = doctorid;
            if (doctorid != 0)
                this.getAppointmentDoctor(doctorid);
            else
                this.appointments = [];
        },
        async getAppointmentDoctor(doctorid) {
            const response = await Api.get("appointmentService/appointment/getAppointmentsByDoctorIdOfTowMonth/" + doctorid);
            this.appointments = response.data.Data.map((appointment) => {
                let date = new Date(appointment.date)

                return {
                    title: appointment.Patient.firstName + " " + appointment.Patient.lastName,
                    start: this.formatDate(date) + "T" + appointment.startHour,
                    end: this.formatDate(date) + "T" + appointment.endHour,
                    room: appointment.Room,
                    patient: appointment.Patient,
                    doctor: appointment.Doctor,
                    appointmentId: appointment.id,
                    AppointmentDate: this.formatDate(date),
                    startHour: appointment.startHour,
                    endHour: appointment.endHour,
                    appointmentDescriotion:appointment.description
                }
            })
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