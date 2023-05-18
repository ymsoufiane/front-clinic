import appointmentApi from "@/apps/appointment/api/appointment";

const addAppointment={
    methods: {
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
          async submit(appointment) {
            appointment['endHour']=this.endTime
            appointmentApi.addAppointment(appointment, (err) => {
              
              if (err != null) {
                this.$store.commit('form/setErr', err)
                if(err['err'])
                this.alertAddAppointment={
                  "type":"error",
                  "showAlert":true,
                  "message":err['err']
                }
                return 
              }
              this.$store.commit('form/setErr', {})
              this.$store.commit("form/clearForm")
              this.alertAddAppointment = {
                "type": "success",
                "showAlert": true,
                "message": "success add appointment in " + appointment['date']
              }
              setTimeout(() => {
                this.alertAddAppointment={"showAlert":false}
              }, 5000);
            })
          }
    },
}

export default addAppointment