<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import EventMeta from '../components/EventMeta.vue'
import type { Event } from '../type.ts'
// import { ref } from 'vue'
import { ref, onMounted, computed } from 'vue'
//import axios from 'axios'
import EventService from '../services/EventService.ts'

const events = ref<Event[]>(null)
const props = defineProps ({
  page: {
    type: Number,
    required: true,
  }
})
const page = computed(() => props.page)

onMounted(() => {
  EventService.getEvents(2, page.value)
    .then((response) => {
      //console.log(response.data)
      events.value = response.data
    })
    .catch((error) => {
      console.error('ERROR!', error)
    })
})
</script>

<template>
  <h1>Events For Good</h1>
  <!--new elements-->
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  <RouterLink
    :to="{ name: 'event-list-view', query: { page: page - 1 } }"
    rel="prev"
    v-if="page != 1"
  >
    Prev Page
  </RouterLink>
  <RouterLink
    :to="{ name: 'event-list-view', query: { page: page + 1 } }"
    rel="next"
    >
    Next Page
  </RouterLink>

</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
