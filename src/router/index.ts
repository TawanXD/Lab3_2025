
import { createRouter, createWebHistory } from "vue-router"
import EventListView from "../views/EventListView.vue"
import AboutView from "../views/AboutView.vue"
//import EventCard from "../components/EventCard.vue"
import StudentList from "../student/StudentList.vue"
import EventDetailView from "../views/event/DetailView.vue"
import EventRegisterView from "../views/event/RegisterView.vue"
import EventEditView from "../views/event/EditView.vue"
import EventLayoutView from "../views/event/LayoutView.vue"
import NotFoundView from "../views/NotFoundView.vue"
import NetworkErrorView from "../views/NetworkErroeView.vue"
import nProgress from 'nprogress'
import EventService from "../services/EventService"
import { useEventStore } from "../stores/event"
import type { RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'event-list-view',
    component: EventListView,

  },
  {
    path: "/about",
    name: 'About',
    component: AboutView
  },
  {
    path: '/404/:resource',
    name: '404-resource-view',
    component: NotFoundView,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFoundView
  },
  {
    path: '/network-error',
    name: 'network-error-view',
    component: NetworkErrorView
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
    name: 'event-layout-view',
    component: EventLayoutView,
    props: true,
    beforeEnter: (to: RouteLocationNormalized) => {
      const id = parseInt(to.params.id as string)
      const eventStore = useEventStore()

      return EventService.getEvent(1, id)
        .then((response) => {
          eventStore.setEvent(response.data)
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            return {
              name: '404-resource-view',
              params: { resource: 'event' }
            }
          } else {
            return { name: 'network-error-view' }
          }
        })
    },
    children: [
      {
        path: '',
        name: 'event-detail-view',
        component: EventDetailView,
        props: true
      },
      {
        path: 'register',
        name: 'event-register-view',
        component: EventRegisterView,
        props: true
      },
      {
        path: 'edit',
        name: 'event-edit-view',
        component: EventEditView,
        props: true
      }
    ],
    scrollBehavior(
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      savedPosition: { left: number; top: number } | null
    ) {
      if (savedPosition) {
        return savedPosition
      } else if (to.hash) {
        return { top: 0 }
      }
    }
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes

})
router.beforeEach(() => {
  nProgress.start()
})


router.afterEach(() => {
  nProgress.done()
})

