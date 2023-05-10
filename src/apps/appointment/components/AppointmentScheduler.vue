<template>
    <full-calendar ref="calendar" :options="calendarOptions" />
</template>

<script>
import { defineComponent, ref } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default defineComponent({
  components: {
    FullCalendar,
  },
  setup() {
    const calendar = ref(null);
    const currentView = ref('dayGridMonth');

    const setView = (viewName) => {
      currentView.value = viewName;
      calendar.value.getApi().changeView(viewName);
    };

    return { calendar, currentView, setView };
  },

  props:{
    appointments:{
      type: Array,
      required: true
    }
  },
  data() {

    return {
      
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        events:this.appointments,
        dateClick: this.handleDateClick,
        eventClick: this.eventClick,
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        buttonText: {
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day'
        }
      },
    };
  },
  methods: {
    eventClick(info) {
      console.log('Event clicked:', info.event.extendedProps);
      alert('Event clicked: ' + info.event.title);
    },
    handleDateClick(info) {
      alert('Clicked on: ' + info.dateStr);
    },
  },
  watch:{
    appointments:{
      handler:function(){
        this.calendarOptions.events=this.appointments;

      },
      deep:true
    }
  }
});
</script>


