<script setup lang="ts">
  import EventCard from '../components/EventCard.vue'
  import EventMeta from '../components/EventMeta.vue'
  import type { Event } from '../type.ts'
  // import { ref } from 'vue'
  import { ref, onMounted } from 'vue'
  //import axios from 'axios'
  import EventService from '../services/EventService.ts'

  const events = ref<Event[]>(null)

  onMounted(()=> {
  //  axios
  //    .get('https://my-json-server.typicode.com/TawanXD/Lab3_2025/events')
    EventService.getEvents()
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
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    />
  </div>

</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
