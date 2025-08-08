<script setup lang="ts">
import { toRefs, onMounted, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import {type Event } from '../types/Event'
import EventService from '../../services/EventService'
import { getEventById } from '../../services/EventService'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'

const store = useMessageStore()
const { message } = storeToRefs(store)

const route = useRoute()
const props = defineProps<{ 
  event: Event
  id: string
}>()

const { event } = toRefs(props) 
</script>

<template>
  <div id="flashMessage" v-if="message">
    <h4>{{ message }}</h4>
  </div>

    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
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
