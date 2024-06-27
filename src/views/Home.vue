<template>
  <main class="home-page">
    <InfoImage
      :image="image"
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
import image from '../assets/images/home_portrait.svg';
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>
