<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'


// const props = withDefaults(
//     defineProps<{
//         resource: string
//     }>(),
//     {
//         resource: 'page'
//     }
// )
</script>



<template>
    <div class="networEerror">
    <h1>Uh-Oh!</h1>
    
    <h3> It looks like you're expreriencing some network issues naaaaa
        <a href="#" @click="$router.go(-1)">Go back</a> to try agian.
    </h3>
    </div>
</template>