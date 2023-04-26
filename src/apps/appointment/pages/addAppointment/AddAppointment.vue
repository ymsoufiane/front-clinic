<template>
  <FormDashboard @changeForm="updateDataHandler" :alertInfo="alertInfo" @submitForm="submit" :inputs="inputs" />
  <Popup @close="close" :isOpen="popupOpen" >
      <TabsFormDashboard :alertInfo="alertPopup" @submitForm="addPatient" :groups="PopupInputs" />
  </Popup>
</template>

<script>
import Popup from '@/components/popup/PopupComponent.vue';
import appointmentForm from '../../json/forms/appointment_form.json';
import patientFormPopup from '../../json/forms/patient_popup_form.json';
import TabsFormDashboard from '@/components/form/TabsForm.vue';
import FormDashboard from '@/components/form/FormDashboard.vue';
import appointmentApi from "@/apps/appointment/api/appointment";
import patientApi from "@/apps/patient/api/patient";
import getAppointmentData from "@/apps/account/mixin/getAppointmentData"
export default {
  name: 'AddAppointment',
  mixins: [getAppointmentData],
  created() {
    this.$store.commit('form/setInitData', {})
    this.inputs.forEach(async(input) => {
      if (input['name'] == 'submit') {
        input['text'] = "Add Appointment"
      }else if (input['name'] == 'departementId') {
        input['options']=await this.getDepartementsOptions()
      }else if(input['name'] == 'patientId'){
        input['options']=await this.getPatientsOptions()
      }
    });
  },

  components: {
    Popup,
    TabsFormDashboard,
    FormDashboard
  },
  data() {
    return {
      PopupInputs: [...patientFormPopup],
      popupOpen: false,
      inputs: [...appointmentForm],
      alertInfo: {},
      alertPopup:{},
      endTime:""
    };
  },
  methods:{
    close(){
      this.popupOpen = false
    },
    updateDataHandler(formData){
      console.log(formData)
      this.popupOpen=formData['patientId']==0
      this.setDoctorsOptions(formData['departementId'])
      this.setAvailableTime(formData['doctorId'],formData['date'])
      this.setEndTime(formData['startHour'])
    },
    setDoctorsOptions(departementId){
      this.inputs.forEach(async(input) => {
        if (input['name'] == 'doctorId') {
          input['options']=await this.getDoctorByDepartement(departementId)
        }
      })
    },
    setAvailableTime(doctorId,date){
      if(!doctorId || !date) return
      this.inputs.forEach(async(input) => {
        if (input['name'] == 'startHour') {
          input['options']=await this.getAppointmentAvailableTimes(doctorId,date)
        }
      })
    },
    setEndTime(startTime){
      if(!startTime) return
      const [hours, minutes] = startTime.split(":");
      const date = new Date();
      date.setHours(hours, minutes, 0, 0);
      date.setMinutes(date.getMinutes() + 15);
      const endTime=date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      this.endTime=endTime

    },
    addPatient(patient){
      patientApi.addPatient(patient,(err)=>{
        if (err != null) {
          this.alertPopup={
            "type":"error",
            "showAlert":true,
            "message":"Error: Please check all required fields. "
          }
          this.$store.commit('form/setErr', err)
          return
        }
        this.$store.commit('form/setErr', {})
        
        this.alertPopup = {
          "type": "success",
          "showAlert": true,
          "message": "success add user " + patient['firstName']
        }
        let initData={"patientId":{"name":patient['lastName']+" "+patient['firstName'],"value":1}}
        this.$store.commit('form/setInitData', initData)
        setTimeout(() => {
          this.popupOpen = false
          this.alertPopup={}
        }, 900);

      })
    },
    async submit(appointment) {
      appointment['endHour']=this.endTime
      appointmentApi.addAppointment(appointment, (err) => {
        
        if (err != null) {
          this.$store.commit('form/setErr', err)
          if(err['err'])
          this.alertInfo={
            "type":"error",
            "showAlert":true,
            "message":err['err']
          }
          return 
        }
        this.$store.commit('form/setErr', {})
        this.$store.commit("form/clearForm")
        this.alertInfo = {
          "type": "success",
          "showAlert": true,
          "message": "success add appointment in " + appointment['date']
        }
      })
    }

  }
}
</script>









<!-- 
<template>
  <TabsFormDashboard :alertInfo="alertInfo" @submitForm="submit" :inputs="inputs" />
</template>
  
<script>
import TabsFormDashboard from '@/components/form/TabsFormDashboard.vue';
import appointmentForm from '../../json/forms/appointment_form.json';
import appointmentApi from "@/apps/appointment/api/appointment";
export default {

  name: 'AddAppointment',
  created() {
    this.$store.commit('form/setInitData', {})
    this.inputs.forEach(input => {
      if (input['name'] == 'submit') {
        input['text'] = "Add Appointment"
      }
    });

  },
  data: function () {
    return {
      inputs: [...appointmentForm],
      alertInfo: {}
    }
  },
  components: { TabsFormDashboard },
  methods: {

    async submit(appointment) {
      appointmentApi.addAppointment(appointment, (err) => {
        if (err != null) {
          this.$store.commit('form/setErr', err)
          return
        }
        this.$store.commit('form/setErr', {})
        this.$store.commit("form/clearForm")
        this.alertInfo = {
          "type": "success",
          "showAlert": true,
          "message": "success add appointment in " + appointment['date']
        }
      })


    }
  }
}
</script>
   -->