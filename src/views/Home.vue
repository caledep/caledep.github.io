<template>
  <main class="home-page">
    <InfoImage
      :imagePath="imagePath"
      :useIntroBlock="true"
      :introObj="{
        title: json.intro.title,
        desc: json.intro.desc,
      }"
      :bodyTitle="json.bio.title"
      :bodyDesc="json.bio.desc"
    />
  </main>
</template>
<script setup>
import InfoImage from '../components/InfoImage.vue';
import json from '../assets/home.json';
const imagePath = '../assets/images/home_portrait.svg';
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>
