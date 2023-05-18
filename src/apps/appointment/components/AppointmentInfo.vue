<template>
    <div class="appointment">
      <h2>{{ title }}</h2>
      <p><strong>Start:</strong> {{ start }}</p>
      <p><strong>End:</strong> {{ end }}</p>
      <p><strong>Room:</strong> {{ room.label }}</p>
      <p><strong>Patient:</strong> {{ patient.firstName }} {{ patient.lastName }}</p>
      <p><strong>Phone Number</strong> {{ patient.phoneNumber }}</p>
      <p><strong>Doctor:</strong> {{ doctor.firstName }} {{ doctor.lastName }}</p>
      <p><strong>Departement:</strong> {{ room.Departement.departement }}</p>
      <p><strong>Start Hour:</strong> {{ startHour }}</p>
      <p><strong>End Hour:</strong> {{ endHour }}</p>
      <!-- appointment description -->
        <p><strong>Description:</strong> {{ appointment.appointmentDescriotion }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      appointment: {
        type: Object,
        required: true,
      },
    },
    created() {
      console.log("appointment info was created");
      console.log(this.appointment);
    },
    computed: {
      title() {
        return (
          this.appointment.patient.firstName +
          " " +
          this.appointment.patient.lastName
        );
      },
      start() {
        return (
          this.appointment.startHour
        );
      },
      end() {
        return (
          this.appointment.endHour
        );
      },
      room() {
        return this.appointment.room;
      },
      patient() {
        return this.appointment.patient;
      },
      doctor() {
        return this.appointment.doctor;
      },
      appointmentId() {
        return this.appointment.id;
      },
      startHour() {
        return this.appointment.startHour;
      },
      endHour() {
        return this.appointment.endHour;
      },

    },
    methods: {
      formatDate(date) {
        // Implement your date formatting logic here
        return new Date(date).toISOString().slice(0, 10);
      },
    },
  }
  </script>
  
  <style scoped>

  </style>
  