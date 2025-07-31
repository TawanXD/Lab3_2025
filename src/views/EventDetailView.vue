<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Event from '@/types/Event'
import EventService from '@/services/EventService'

const route = useRoute()
const event = ref<Event | null>(null)
const id = ref<number>(5928101)

onMounted(async () => {
  EventService.getEventById(id.value)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.error('ERROR! RAWRRRRR :', error)
    })  
  const id = route.params.id as string
  event.value = await getEventById(id) // ใช้ฟังก์ชันเรียกข้อมูลจาก backend
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