<script setup lang="ts">
import { toRefs, onMounted, defineProps } from 'vue'
import { useRoute } from 'vue-router'
//import {type Event } from '../types/Event'
//import EventService from '../../services/EventService'
//import { getEventById } from '../services/EventService'

const route = useRoute()
const props = defineProps<{ 
  event: Event
  id: string
}>()

const { event } = toRefs(props) 
</script>

<template>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
</template>