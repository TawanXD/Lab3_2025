<template>
  <div class="event-meta">
    <p>{{ event.category }}</p>
    <p>{{ event.organizer }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Event } from '@/types'

defineProps<{ event: Event }>()
</script>

<style scoped>
.event-meta {
  text-align: right;
  font-size: 1rem;
}
.event-meta p {
  margin: 0.25rem 0;
}
</style>