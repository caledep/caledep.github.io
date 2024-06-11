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
:root {
  --primary: #161a4a;
  --primary-hover: #232757;
  --clear: rgba(0, 0, 0, 0);
  --gray: #64748b;
  --dark: #1e293b;
  --dark-alt: #c08552;
  --light: #fffce2;
  --sidebar-width: 280px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
  font-family: 'Red Hat Display', sans-serif;
}

body {
  background-image: url(./assets/images/wyo_valley_pattern_2.svg);
  justify-content: center;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
.app {
  display: flex;
}
main {
  flex: 1 1 0;

  padding: 2rem;
  padding-top: 6rem;
  @media (max-width: 768px) {
    padding-left: 6rem;
  }
}
</style>
