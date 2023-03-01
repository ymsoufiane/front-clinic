import AddUser from './pages/addAdmin/AddUser'
import AddRole from './pages/addRole/AddRole'
import LoginPage from './pages/login/LoginPage'
import ListRoles from './pages/listRoles/ListRoles'
import ListAdmin from './pages/listAdmin/ListAdmin'

const routes = [
  {
    path: '/add/user',
    name: 'addUser',
    parent:'dashboard',
    component: AddUser
  },
  {
    path: '/add/role',
    name: 'addRole',
    parent:'dashboard',
    component: AddRole
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