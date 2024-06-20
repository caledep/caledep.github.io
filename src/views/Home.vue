<template>
  <main class="home-page">
    <div class="portrait-intro">
      <div class="portrait-image imgFrame">
        <img
          src="../assets/images/portrait_drawn_med.svg"
          class="image"
          alt="vue"
        />
      </div>
      <div class="intro-block contFrame">
        <h1 v-if="json">{{ json.intro.title }}</h1>
        <hr class="contRule" />
        <p v-if="json">{{ json.intro.desc }}</p>
      </div>
    </div>

    <div class="bio-block contFrame">
      <h1 v-if="json">{{ json.bio.title }}</h1>
      <hr class="contRule" />
      <p v-if="json">{{ json.bio.desc1 }}</p>
      <p v-if="json">{{ json.bio.desc2 }}</p>
      <p v-if="json">{{ json.bio.desc3 }}</p>
    </div>
  </main>
</template>
<script setup>
import json from '../assets/home.json';
</script>
<style lang="scss" scoped>
main {
  flex-direction: column;
  .portrait-intro {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: flex-end;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: row;
      max-width: 100%;
      flex-wrap: wrap;
    }
    .portrait-image {
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        max-width: 100%;
        align-items: flex-start;
      }
    }

    .intro-block {
      @media (max-width: 768px) {
        display: flex;
        min-width: 20rem;
        flex-direction: column;
        max-width: 100%;
      }
    }
  }
  .bio-block {
    p {
      padding-bottom: 20px;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      max-width: 100%;
    }
  }
}
</style>
