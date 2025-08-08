<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import EventMeta from '../components/EventMeta.vue'
import { type Event } from '../types.ts'
import { ref, onMounted, computed, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import EventService from '../views/EventService'

const route = useRoute()
const router = useRouter()

const events = ref<Event[] | null>(null)
const totalEvents = ref(0)

const page = computed(() => Number(route.query.page) || 1)
const pageSize = ref(Number(route.query.size) || 2)

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / pageSize.value)
  return page.value < totalPages
})

watchEffect(() => {
  
  EventService.getEvents(pageSize.value, page.value)
    .then((response) => {
      events.value = response.data
      totalEvents.value = Number(response.headers['x-total-count'])
    })
    .catch((error) => {
      console.error('ERROR!', error)
    })

})

function updateSize(newSize: number) {
  router.push({
    name: 'event-list-view',
    query: { page: 1, size: newSize }
  })
}
</script>

<template>
  <h1>Events For Good</h1>

  <!-- 🔧 Dropdown for page size -->
  <label for="size-select">Events per page:</label>
  <select id="size-select" v-model.number="pageSize" @change="updateSize(pageSize)">
    <option :value="2">2</option>
    <option :value="3">3</option>
    <option :value="5">5</option>
    <option :value="10">10</option>
  </select>

  <div class="flex flex-col items-center">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <RouterLink id="page-prev" :to="{ name: 'event-list-view', query: { page: page - 1, size: pageSize } }" rel="prev"
        v-if="page > 1">
        &#60;Prev Page
      </RouterLink>
      <RouterLink id="page-next" :to="{ name: 'event-list-view', query: { page: page + 1, size: pageSize } }" rel="next"
        v-if="hasNextPage">
        Next Page &#62;
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

.pagination {
  display: flex;
  width: 290px;
  margin-top: 10px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}

label {
  margin-bottom: 8px;
  font-weight: bold;
}

select {
  margin-bottom: 16px;
  padding: 4px 8px;
}
</style>