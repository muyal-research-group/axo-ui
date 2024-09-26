import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import MyObjects from '@/views/MyObjects.vue'
import RegisterView from '@/views/RegisterView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView
  },
  {
    path: "/home",
    name: "home",
    component: HomeView
  },
  {
    path: "/my-objects",
    name: "my-objects",
    component: MyObjects
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
