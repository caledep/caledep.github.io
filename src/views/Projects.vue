<template>
  <main class="projects-page">
    <ConstructionPage>Projects</ConstructionPage>
  </main>
</template>
<script setup>
import ConstructionPage from '../components/ConstructionPage.vue';
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-grow: 1;
}
</style>
