<script setup lang="ts">
import { toRefs } from 'vue'
//import { ref, onMounted, defineProps } from 'vue'
import { type Event } from '../types/Event'
import EventService from '../services/EventService'

const { event } = toRefs(props) 
const props = defineProps<{
    event: Event
    id: string
}>()

</script>

<template>
    <p>Register here</p>
</template>