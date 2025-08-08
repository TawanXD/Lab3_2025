<script setup lang="ts">
import { toRefs } from 'vue'
//import { ref, onMounted, defineProps } from 'vue'
import { type Event } from '../types/Event'
import EventService from '../services/EventService'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'

const props = defineProps<{
    event: Event
    id: string
}>()
const { event } = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const register = () => {
    setTimeout(() => {
        store.updateMessage('Data has been updated')
    },3000)
        router.push({ name: 'event-detail-view', params: { id: props.id } })
}

</script>

<template>
    <p>Register here</p>
    <button @click="register">Register</button>
</template>