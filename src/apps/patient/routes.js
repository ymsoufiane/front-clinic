import AddPatient from './pages/addPatient/AddPatient'
import ListPatients from './pages/listPatients/ListPatients'
import EditPatient from './pages/editPatient/EditPatient'
import EditMedication from './pages/editMedication/EditMedication'
import EditAllergy from './pages/editAllergy/EditAllergy'
import AddAllergy from './pages/addAllergy/AddAllergy'
import AddMedication from './pages/addMedication/AddMedication'
import ListMedication from './pages/listMedication/ListMedication'
import ListAllergy from './pages/listAllergy/ListAllergy'
import AddCategoriePrestation from './pages/addCategoriePrestation/AddCategoriePrestation'
import ListCategoriePrestation from './pages/listCategoriesPrestation/ListCategoriePrestation'
import AddPrestation from './pages/addPrestation/AddPrestation'
import ListPrestation from './pages/listPrestation/ListPrestation'
import EditPrestation from './pages/editPrestation/EditPrestation'
import EditCategoriePresation from './pages/editCategoriePrestation/EditCategoriePrestation'



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
  {
    path: '/edit/allergy/:id',
    name: 'editAllergy',
    parent:'dashboard',
    component: EditAllergy
  },

  {
    path: '/add/medication',
    name: 'AddMedication',
    parent:'dashboard',
    component: AddMedication
  },
  {
    path: '/edit/medication/:id',
    name: 'editMedication',
    parent:'dashboard',
    component: EditMedication
  },
  {
    path: '/medications',
    name: 'ListMedication',
    parent:'dashboard',
    component: ListMedication
  },

  {
    path: '/add/prestation/categorie',
    name: 'AddCategoriePrestation',
    parent:'dashboard',
    component: AddCategoriePrestation
  },
  {
    path: '/prestation/categories',
    name: 'ListCategoriesPrestation',
    parent:'dashboard',
    component: ListCategoriePrestation
  },
  {
    path: '/edit/prestation/categorie/:id',
    name: 'editCategoriePrestation',
    parent:'dashboard',
    component: EditCategoriePresation
  },
  {
    path: '/add/prestation',
    name: 'AddPrestation',
    parent:'dashboard',
    component: AddPrestation
  },
  {
    path: '/prestations',
    name: 'ListPrestation',
    parent:'dashboard',
    component: ListPrestation
  },
  //EditPrestation
  {
    path: '/edit/prestation/:id',
    name: 'editPrestation',
    parent:'dashboard',
    component: EditPrestation
  },

]

export { routes }