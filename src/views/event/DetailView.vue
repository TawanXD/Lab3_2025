<script setup lang="ts">
import { toRefs, onMounted, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import { type Event } from '../types/Event'
import EventService from '../../services/EventService'
import { getEventById } from '../../services/EventService'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useMessageStore()
const { message } = storeToRefs(store)

const route = useRoute()
const props = defineProps<{
  event: Event
  id: string
}>()

const { event } = toRefs(props)
const eventData = ref<Event | null>(null)

onMounted(async () => {
  try {
    const response = await getEventById(props.id)
    eventData.value = response.data
    console.log('Fetched event:', eventData.value)
  } catch (error) {
    console.error('Error fetching event:', error)
    store.setMessage('Failed to load event.')
  }
})

console.log('event:', event.value)

</script>

<template>
  <div id="flashMessage" v-if="message">
    <h4>{{ message }}</h4>
  </div>
  <p v-if="eventData">{{ eventData.description }}</p>
  <p v-if="eventData">{{ eventData.time }} on {{ eventData.date }} @ {{ eventData.location }}</p>
  
</template>

<style scoped>
@keyframes yellowfade {
  from {
    background-color: yellow;
  }

  to {
    background-color: transparent;
  }
}

#flashMessage {
  animation: yellowfade 3s ease-in-out;
}
</style>
