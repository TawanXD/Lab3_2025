<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import {type Event } from '../types/Event'
import EventService from '../services/EventService'
//import { getEventById } from '../services/EventService'

const route = useRoute()
const event = ref<Event | null>(null)
const props = defineProps({ 
  id: {
    type: String,
    required: true 
  }
})

onMounted(async () => {
  EventService.getEventById(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.error('ERROR! RAWRRRRR :', error)
    })  
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
  <div v-else>
    <p>Loading or event not found</p>
  </div>
</template>