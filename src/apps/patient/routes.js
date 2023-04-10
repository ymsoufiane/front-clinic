import AddPatient from './pages/addPatient/AddPatient'
import ListPatients from './pages/listPatients/ListPatients'
import EditPatient from './pages/editPatient/EditPatient'
import AddAllergy from './pages/addAllergy/AddAllergy'
import AddMedication from './pages/addMedication/AddMedication'
import ListMedication from './pages/listMedication/ListMedication'
import ListAllergy from './pages/listAllergy/ListAllergy'


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


  {
    path: '/add/allergy',
    name: 'AddAllergy',
    parent:'dashboard',
    component: AddAllergy
  },
  {
    path: '/allergys',
    name: 'ListAllergy',
    parent:'dashboard',
    component: ListAllergy
  },
//ListAllergy

  {
    path: '/add/medication',
    name: 'AddMedication',
    parent:'dashboard',
    component: AddMedication
  },
  {
    path: '/medications',
    name: 'ListMedication',
    parent:'dashboard',
    component: ListMedication
  },

]

export { routes }