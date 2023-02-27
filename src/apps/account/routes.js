import AddUser from './pages/addAdmin/AddUser'
import AddRole from './pages/addRole/AddRole'
import LoginPage from './pages/login/LoginPage'
import ListRoles from './pages/listRoles/ListRoles'

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
    path: '/login',
    component: LoginPage
  }
]

export { routes }