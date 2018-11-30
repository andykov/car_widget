import Vue from 'vue'
import Router from 'vue-router'
// import DefaultHome from './views/DefaultHome.vue'
import Home from './components/Home.vue'
import Login from './components/Auth/Login.vue'
import Registration from './components/Auth/Registration.vue'
import Task from './components/Task.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'DefaultHome',
    //   component: DefaultHome
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/task',
      name: 'Task',
      component: Task
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
