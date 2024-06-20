<template>
  <main class="home-page">
    <div class="portrait-intro">
      <div class="portrait-image">
        <img :src="imagePath" class="image" alt="vue" />
        <!-- <img src="getImageSrc(home_portrait.svg)" class="image" alt="vue" /> -->
      </div>
      <div class="intro-block">
        <h1>{{ introTitle }}</h1>
        <hr />
        <p>{{ introDesc }}</p>
      </div>
    </div>

    <div class="bio-block">
      <h1>{{ bioTitle }}</h1>
      <hr />
      <p>{{ bio1 }}</p>
      <p>{{ bio2 }}</p>
      <p>{{ bio3 }}</p>
    </div>
  </main>
</template>
<script setup>
const imgName = 'home_portait.svg';
const props = defineProps({
  imagePath: String,
  introTitle: String,
  introDesc: String,
  bioTitle: String,
  bio1: String,
  bio2: String,
  bio3: String,
});
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  hr {
    border-top: 1px solid var(--primary);
  }
  div {
    color: var(--primary);
  }
  p {
    font-size: 20px;
  }
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
      border: solid;
      border-width: 0.2rem;
      border-color: var(--primary);
      border-radius: 2em;
      min-width: 300px;
      // max-width: 24rem;
      // max-height: 30rem;
      overflow: hidden;

      // align-items: center;
      // justify-content: center;
      img {
        max-width: 100%;
        height: 100%;
      }
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        max-width: 100%;
        align-items: flex-start;
      }
    }

    .intro-block {
      padding: 2rem;
      background: #fffce2;
      border: solid;
      border-width: 0.2rem;
      border-color: var(--primary);
      max-height: fit-content;
      max-width: calc(87rem - 24rem - 2rem - 0.4rem);
      border-radius: 2em;
      @media (max-width: 768px) {
        display: flex;
        min-width: 20rem;
        flex-direction: column;
        max-width: 100%;
      }
    }
  }
  .bio-block {
    padding: 2rem;
    border: solid;
    max-width: 87rem;
    background: #fffce2;
    border-width: 3px;
    border-color: #161a4a;
    border-radius: 2em;
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
