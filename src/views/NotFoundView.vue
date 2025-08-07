<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'


const props = withDefaults(
    defineProps<{
        resource: string
    }>(),
    {
        resource: 'page'
    }
)
</script>



<template>
    <h1>Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <h3> The {{ resource }} you're looking for is not here.</h3>
    <router-link :to="{ name: 'event-list-view' }">Go back to Home</router-link>
</template>