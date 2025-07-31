import { createRouter, createWebHistory } from "vue-router"
import EventListView from "@/components/EventListView.vue"
import AboutView from "@/components/AboutView.vue"
import EventCard from "@/components/EventCard.vue"
import StudentList from "@/student/StudentList.vue"
import EventDetailView from "@/views/EventDetailView.vue"

const routes = [
  { 
    path: "/",
    name: 'event-list-view', 
    component: EventListView 
  },
  { 
    path: "/events/5928101", 
    name: 'event-detail-view',
    component: EventDetailView,
  },
  { 
    path: "/about", name: 'about', 
    component: AboutView
  },
  { 
    path: "/students", 
    name: 'student-list',
    component: StudentList
  },
  { 
    path: "/events/5928101", 
    name: 'event-detail-view',
    component: EventDetailView,
  }

]

export const router = createRouter({
  history: createWebHistory(),
  routes
})