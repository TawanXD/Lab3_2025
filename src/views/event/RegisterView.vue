<script setup lang="ts">
import { toRefs } from 'vue'
//import { ref, onMounted, defineProps } from 'vue'
import { type Event } from '../types/Event'
import EventService from '../services/EventService'
import { useRouter } from 'vue-router'

const props = defineProps<{
    event: Event
    id: string
}>()
const { event } = toRefs(props) 
const router = useRouter()
const register = () => {
    router.push({
        name: 'event-detail-view',
    })

}

</script>

<template>
    <p>Register here</p>
    <button @click="register">Register</button>
</template>