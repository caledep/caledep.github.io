<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>
      Welcome to Cale's website.
    </p>
  </div>

  <p class="construction_notice">
    <img src="/icon_construction_dark.svg" class="icon" alt="construction icon" />
      <b>The site is currently undergoing a rebuild, check back later.</b>
    <img src="/icon_construction_dark.svg" class="icon" alt="construction icon" />
  </p>
</template>

<style scoped>
.construction_notice {
  display: flex;
  width:100%;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  
}
</style>
