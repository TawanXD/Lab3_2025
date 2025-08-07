<script setup lang="ts">
import { type Event } from '../types/Event'
import { ref, onMounted, defineProps } from 'vue'
import EventService from '../services/EventService'


const props = defineProps<{
    event: Event
}>()
const { event } = toRefs(props) 
</script>

<template>
    <p>Edit event here</p>
</template>