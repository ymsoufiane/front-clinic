import Api from "@/api";
const getDepartements = {
    methods: {
        async getDepartementsOptions() {
            let response = await Api.get("accountService/departement/all")
            let departements = response.data
            let options = []
            departements.forEach((departement) => {
                options.push({ "name": departement['departement'], "value": departement['ID'] })
            })
            return options
        },
        async getDoctorByDepartement(departementID) {
            if (!departementID) return []
            let response = await Api.get("accountService/user/accountType/doctor/departement/" + departementID)
            let doctors = response.data.Data
            let options = []
            doctors.forEach((doctor) => {
                options.push({ "name": doctor['lastName'] + " " + doctor['firstName'], "value": doctor['ID'] })
            })
            return options
        },
        async getPatientsOptions() {
            let response = await Api.get("patientService/patient/patients/options")
            let patients = response.data.Data
            let options = []
            options.push({ "name": "new patient", "value": 0 })
            patients.forEach((patient) => {
                options.push({ "name": patient['lastName'] + " " + patient['firstName'], "value": patient['id'] })
            })
            return options
        },
        async getAppointmentAvailableTimes(doctorID,roomId, date,duration) {
            let options = []

            try {
                let response = await Api.get("appointmentService/appointment/getAvailableSlots/" + doctorID + "/"+roomId+"/"+ date+"?slotDuration="+duration)
                let times = response.data.Data
                times.forEach((time) => {
                    options.push({ "name": time, "value": time })
                })
            } catch (error) {
                console.log(error)
            }

            return options
        },
        async getPrestationsOptions(doctorId) {
            let response = await Api.get("accountService/user/getPrestations/" + doctorId)
            let prestations = response.data.Data
            let options = []
            prestations.forEach((prestation) => {
                options.push({ "name": prestation['label'], "value": prestation['id'] })
            })
            return options
        },
        async getRoomsOptions(doctoId, prestationId, date) {
            let response = await Api.get("accountService/room/options/" + doctoId + "/" + prestationId + "/" + date)
            let rooms = response.data.Data
            let options = []
            rooms.forEach((room) => {
                options.push({ "name": room['label'], "value": room['id'] })
            })
            return options
        },
        getTopRestaurants() {

            return [
                {
                    "id": 1,
                    'NOM': "Product Name",

                }
            ]
        }

    },
}

export default getDepartements