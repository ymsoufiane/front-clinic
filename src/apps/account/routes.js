import AddAdmin from './pages/addAdmin/AddAdmin'
import AddRole from './pages/addRole/AddRole'
import EditRole from './pages/editRole/EditRole'
import LoginPage from './pages/login/LoginPage'
import ListRoles from './pages/listRoles/ListRoles'
import ListAdmin from './pages/listAdmin/ListAdmin'
import EditAdmin from './pages/editAdmin/EditAdmin'



const routes = [
  {
    path: '/add/admin',
    name: 'addAdmin',
    parent:'dashboard',
    component: AddAdmin
  },
  {
    path: '/edit/admin/:id',
    name: 'editAdmin',
    parent:'dashboard',
    component: EditAdmin
  },
  {
    path: '/add/role',
    name: 'addRole',
    parent:'dashboard',
    component: AddRole
  },
  {
    path: '/edit/role',
    name: 'editRole',
    parent:'dashboard',
    component: EditRole
  },
  {
    path: '/roles',
    name: 'listRoles',
    parent:'dashboard',
    component: ListRoles
  },
  {
    path: '/users',
    name: 'listAdmin',
    parent:'dashboard',
    component: ListAdmin

  },
  {
    path: '/login',
    component: LoginPage
  }
]

export { routes }