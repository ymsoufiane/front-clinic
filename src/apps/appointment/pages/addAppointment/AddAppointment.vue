<template>
  <FormDashboard @changeForm="updateDataHandler"  :alertInfo="alertAddAppointment" @submitForm="submit" :inputs="inputs" />
  <Popup @close="close" :isOpen="popupOpen" >
      <TabsFormDashboard :alertInfo="alertAddPatient" @submitForm="addPatient" :groups="PopupInputs" />
  </Popup>
</template>

<script>
import Popup from '@/components/popup/PopupComponent.vue';
import appointmentForm from '../../json/forms/appointment_form.json';
import patientFormPopup from '../../json/forms/patient_popup_form.json';
import TabsFormDashboard from '@/components/form/TabsForm.vue';
import FormDashboard from '@/components/form/FormDashboard.vue';
import patientApi from "@/apps/patient/api/patient";
import getAppointmentData from "@/apps/appointment/mixin/getAppointmentData"
import addAppointment from "@/apps/appointment/mixin/addAppointment"
export default {
  name: 'AddAppointment',
  mixins: [getAppointmentData,addAppointment],
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
      alertAddAppointment: {},
      alertAddPatient:{},
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
    
    addPatient(patient){
      patientApi.addPatient(patient,(err)=>{
        if (err != null) {
          this.alertAddPatient={
            "type":"error",
            "showAlert":true,
            "message":"Error: Please check all required fields. "
          }
          this.$store.commit('form/setErr', err)
          return
        }
        this.$store.commit('form/setErr', {})
        
        this.alertAddPatient = {
          "type": "success",
          "showAlert": true,
          "message": "success add user " + patient['firstName']
        }
        let initData={"patientId":{"name":patient['lastName']+" "+patient['firstName'],"value":1}}
        this.$store.commit('form/setInitData', initData)
        setTimeout(() => {
          this.popupOpen = false
          this.alertAddPatient={}
        }, 900);

      })
    },
    

  },
  computed:{

  }
  
}
</script>

