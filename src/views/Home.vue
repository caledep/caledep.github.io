<template>
  <main class="home-page">
    <head>
      <meta
        name="google-site-verification"
        content="Zk0ePp5L5G3Zi0VC4g_6m3GWsNlbmj4ArVE0vRFXk9Y"
      />
    </head>
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
