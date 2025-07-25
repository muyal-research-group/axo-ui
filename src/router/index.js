import CreateObject from '@/views/CreateObject.vue'
import EditObject from '@/views/EditObject.vue'
import EditProfile from '@/views/EditProfile.vue'
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
  },
  {
    path: "/create-object",
    name: "create-object",
    component: CreateObject
  },
  {
    path: "/edit-object",
    name: "edit-object",
    component: EditObject
  },
  {
    path: "/edit-profile",
    name: "edit-profile",
    component: EditProfile
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
