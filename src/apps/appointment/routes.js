import AddAppointment from './pages/addAppointment/AddAppointment'
import ListAppointment from './pages/listAppointment/ListAppointment'

const routes=[
    {
        path: '/add/appointment',
        name: 'addAppointment',
        parent:'dashboard',
        component: AddAppointment
    },
    {
      path: '/appointments',
      name: 'listAppointment',
      parent:'dashboard',
      component: ListAppointment
  },
]

export { routes }