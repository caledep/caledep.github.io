<template>
  <div class="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
</script>

<style Lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: 'Red Hat Display', sans-serif;
}

body {
  background-image: url(./assets/images/wyo_valley_pattern_2.svg);
}

.app {
  display: flex;
}
</style>
