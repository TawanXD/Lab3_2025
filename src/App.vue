<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
<div id="layout">
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Event</RouterLink> |
                <RouterLink to="/about">About</RouterLink> | 
                <RouterLink to="/students">Students</RouterLink>
            </nav>
        </div>
    </header>
    <!-- <h1>Events For Good</h1>
      new element -->
    <RouterView />
</div>
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}
</style>
