import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/Home.vue"
import UserListView from "@/views/UserList.vue"

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/users", name: "UserList", component: UserListView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
