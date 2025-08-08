<script setup lang="ts">
import { type Event } from '../types/Event'
import { toRefs, ref , onMounted, defineProps } from 'vue'
import EventService from '../services/EventService'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'


const props = defineProps<{
    event: Event
    id: string
}>()
const { event } = toRefs(props) 
const router = useRouter()
const messageStore = useMessageStore()

function handleEdit() {
  messageStore.updateMessage('Data has been updated')
  router.push({ name: 'event-detail-view' }) 
}

</script>

<template>
    <p>Edit event here</p>
    <button @click="handleEdit">Edit</button>
</template>