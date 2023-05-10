import AddAppointment from './pages/addAppointment/AddAppointment'
import ListAppointment from './pages/listAppointment/ListAppointment'
import ListAppointmentCalendar from './pages/listAppointment/ListAppointmentCalendar'

const routes = [
  {
    path: '/add/appointment',
    name: 'addAppointment',
    parent: 'dashboard',
    component: AddAppointment
  },
  {
    path: '/appointments',
    name: 'listAppointment',
    parent: 'dashboard',
    component: ListAppointment
  },
  //ListAppointmentCalendar
  {
    path: '/appointments/calendar',
    name: 'listAppointmentCalendar',
    parent: 'dashboard',
    component: ListAppointmentCalendar
  }
]

export { routes }