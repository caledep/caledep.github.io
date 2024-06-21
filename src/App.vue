<template>
  <div class="app">
    <SidebarNav />
    <router-view />
  </div>
</template>

<script setup>
import SidebarNav from './components/SidebarNav.vue';
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
