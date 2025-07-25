import { createRouter, createWebHistory } from "vue-router"
import EventListView from "../components/EventListView.vue"
import AboutView from "../components/AboutView.vue"
import EventCard from "../components/EventCard.vue"

const routes = [
  { path: "/",name: 'event-list-view', component: EventListView },
  { path: "/about", name: 'about', 
  component: AboutView
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})