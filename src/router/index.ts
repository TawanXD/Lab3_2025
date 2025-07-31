import { createRouter, createWebHistory } from "vue-router"
import EventListView from "../components/EventListView.vue"
import AboutView from "../components/AboutView.vue"
import EventCard from "../components/EventCard.vue"
import StudentList from "../student/StudentList.vue"
import EventDetailView from "../views/EventDetailView.vue"

const routes = [
  {
    path: "/",
    name: 'event-list-view',
    component: EventListView
  },
  {
    path: "/about", 
    name: 'About',
    component: AboutView
  },
  {
    path: "/students",
    name: 'StudentList',
    component: StudentList
  },
  {
    path: '/events',
    name: 'EventList',
    component: EventListView
  },
  {
    path: '/event/:id',
    name: 'event-detail-view',
    component: EventDetailView,
    props: true
  }

]

export const router = createRouter({
  history: createWebHistory(),
  routes
})