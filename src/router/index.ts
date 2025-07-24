import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../components/HomeView.vue"
import EventCard from "../components/EventCard.vue"

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: EventCard }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})