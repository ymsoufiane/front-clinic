<template>
  <FormDashboard @changeForm="updateDataHandler"  :alertInfo="alertInfo" @submitForm="submit" :inputs="inputs" />
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
import getAppointmentData from "@/apps/appointment/mixin/getAppointmentData"
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
      endTime:"",
      departementId:-1,
      doctorId:-1,
      prestationId:-1,
      duration:"",
      startHour:"",
      date:""
    };
  },
  methods:{
    close(){
      this.popupOpen = false
    },
    updateDataHandler(formData){
      this.popupOpen=formData['patientId']==0
      if(this.departementId!=formData['departementId']){
        this.departementId=formData['departementId']
        this.setDoctorsOptions(formData['departementId'])

      }else if(this.doctorId!=formData['doctorId']){

        this.doctorId=formData['doctorId']
        this.setAvailableTime(formData['doctorId'],formData['roomId'],formData['date'],formData['duration'])
        this.setPrestationOptions(formData['doctorId'])

      }else if(this.startHour!=formData['startHour']){
        this.startHour=formData['startHour']
        this.setEndTime(formData['startHour'],formData['duration'])
      }else if(this.date!=formData['date']){
        this.date=formData['date']
        this.setAvailableTime(formData['doctorId'],formData['roomId'],formData['date'],formData['duration'])
      }else if(this.roomId!=formData['roomId']){
        this.roomId=formData['roomId']
        this.setAvailableTime(formData['doctorId'],formData['roomId'],formData['date'],formData['duration'])
      }
      else if(this.prestationId!=formData['prestationId']){
        this.prestationId=formData['prestationId']
        this.setRoomsOptions(formData['doctorId'],formData['prestationId'],formData['date'])
      }else if(this.duration!=formData['duration']){
        this.duration=formData['duration']
        this.setAvailableTime(formData['doctorId'],formData['roomId'],formData['date'],formData['duration'])
      }


      
    },
    setDoctorsOptions(departementId){
      this.inputs.forEach(async(input) => {
        if (input['name'] == 'doctorId') {
          input['options']=await this.getDoctorByDepartement(departementId)
        }
      })
    },
    setAvailableTime(doctorId,roomId,date,duration){
      if(!doctorId || !date || !roomId ) return
      this.inputs.forEach(async(input) => {
        if (input['name'] == 'startHour') {
          input['options']=await this.getAppointmentAvailableTimes(doctorId,roomId,date,duration)
        }
      })
    },
    setPrestationOptions(doctorId){
      if(!doctorId) return
      this.inputs.forEach(async(input) => {
        if (input['name'] == 'prestationId') {
          input['options']=await this.getPrestationsOptions(doctorId)
        }
      })
    },
    setRoomsOptions(doctorId,prestationId,date){
      if(!doctorId || !prestationId) return
      this.inputs.forEach(async(input) => {
        if (input['name'] == 'roomId') {
          input['options']=await this.getRoomsOptions(doctorId,prestationId,date)
        }
      })
    },
    setEndTime(startTime,duration){
      if(!startTime) return
      const [hours, minutes] = startTime.split(":");
      const date = new Date();
      date.setHours(hours, minutes, 0, 0);
      date.setMinutes(date.getMinutes() + parseInt(duration.split("m")[0]));
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

  },
  computed:{

  }
  
}
</script>

