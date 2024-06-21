<template>
  <main class="home-page">
    <div class="portrait-intro">
      <div class="portrait-image img-frame">
        <img src="../assets/images/home_portrait.svg" class="image" alt="vue" />
      </div>
      <div class="intro-block cont-frame">
        <h1 v-if="json">{{ json.intro.title }}</h1>
        <hr />
        <p v-if="json">{{ json.intro.desc }}</p>
      </div>
    </div>

    <div class="bio-block cont-frame">
      <h1 v-if="json">{{ json.bio.title }}</h1>
      <hr />
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
    gap: 32px;
    align-items: flex-end;
    @media (max-width: $media_width) {
      flex-wrap: wrap;
      padding-top: $pad_half;
    }
    .portrait-image {
      display: flex;
      flex-basis: 30%;
      min-width: 300px;
      @media (max-width: $media_width) {
        width: fit-content;
        flex-grow: 1;
      }
    }
    .intro-block {
      display: flex;
      flex-direction: column;
      flex-basis: 70%;
      @media (max-width: $media_width) {
        width: fit-content;
        flex-grow: 1;
      }
    }
  }
  .bio-block {
    p {
      padding-bottom: 20px;
    }
    p:last-child {
      padding-bottom: 0;
    }
  }
}
</style>
