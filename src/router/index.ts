import { createRouter, createWebHistory } from "vue-router"
import EventListView from "../components/EventListView.vue"
import AboutView from "../components/AboutView.vue"
import EventCard from "../components/EventCard.vue"
import StudentList from "../student/StudentList.vue"

const routes = [
  { path: "/",name: 'event-list-view', component: EventListView },
  { path: "/about", name: 'about', 
  component: AboutView
  },
  { path: "/students", name: 'student-list',
  component: StudentList}

]

export const router = createRouter({
  history: createWebHistory(),
  routes
})