import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import { firebaseApp } from './firebaseApp'


Vue.use(VueRouter)

import store from './store'
import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'
const router = new VueRouter({
  mode: 'history', //history mode makes sure that when new url hit, change happens on current page
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup }
  ]
})

firebaseApp.auth().onAuthStateChanged(user => {
  //If do get a use, navigate to dashboard
  if (user) {
    store.dispatch('signIn', user)//Now have user within our store
    router.push('/dashboard')//Navigate to a new page and push to the top of current one, forming a stack
  } else {
    router.replace('/signin')//Replace the component at beginning

  }
  //If not, navigate to sign in page
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
