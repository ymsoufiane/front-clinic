import AddPatient from './pages/addPatient/AddPatient'
import ListPatients from './pages/listPatients/ListPatients'
import EditPatient from './pages/editPatient/EditPatient'


const routes = [
  {
    path: '/add/patient',
    name: 'addPatient',
    parent:'dashboard',
    component: AddPatient
  },
  {
    path: '/patients',
    name: 'listPatients',
    parent:'dashboard',
    component: ListPatients
  },
  {
    path: '/edit/patient/:id',
    name: 'editPatient',
    parent:'dashboard',
    component: EditPatient
  },

]

export { routes }