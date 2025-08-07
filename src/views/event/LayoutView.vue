<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { type Event } from '../types/Event'
import EventService from '../../services/EventService'
import { useRouter } from 'vue-router'

const event = ref<Event | null>(null)
const props = defineProps({
    id: {
        type: String,
        required: true
    }
})
const router = useRouter()

onMounted(() => {
    console.log('ID:', props.id)
    EventService.getEventById(parseInt(props.id))
        .then(response => {
            event.value = response.data
        })
        .catch(() => {
            router.push({ 
                name: '404-resource-view',
                params: { resource: 'event' }
            })
        })
})
</script>

<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <nav>
            <Router-link :to="{ name: 'event-detail-view' }">Details</router-link>
            |
            <Router-link :to="{ name: 'event-register-view' }">Register</router-link>
            |
            <Router-link :to="{ name: 'event-edit-view' }">Edit</router-link>
        </nav>
        <RouterView :event="event" />
    </div>
</template>