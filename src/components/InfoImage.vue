<template>
  <div class="info-image">
    <div v-if="props.useIntroBlock" class="top-block-wrapper">
      <div class="image-block img-frame">
        <img :src="imagePath" class="image" alt="vue" />
        <!-- <img src="getImageSrc(home_portrait.svg)" class="image" alt="vue" /> -->
      </div>
      <div class="intro-block cont-frame">
        <h1>{{ introObj.title }}</h1>
        <hr />
        <p>{{ introObj.desc }}</p>
      </div>
    </div>
    <div v-else class="top-block-wrapper">
      <div class="image-block image-fill img-frame">
        <img :src="imagePath" class="image" alt="vue" />
      </div>
      <div class="intro-list cont-frame">
        <ListBlock :objectList="props.introObj" />
      </div>
    </div>
    <div class="bio-block cont-frame">
      <h1>{{ bodyTitle }}</h1>
      <hr />
      <div v-for="(p, index) in bodyDesc" :key="index" class="body-desc">
        <br v-if="index > 0" />
        <p>{{ p }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import ListBlock from './ListBlock.vue';
const props = defineProps({
  imagePath: String,
  useIntroBlock: Boolean,
  introObj: Object,
  bodyTitle: String,
  bodyDesc: Array,
});
</script>
<style lang="scss" scoped>
.info-image {
  display: flex;
  flex-direction: column;
  gap: $pad;
  padding-top: $pad_half;
  .top-block-wrapper {
    display: flex;
    flex-direction: row;
    gap: $pad;
    align-items: flex-end;
    justify-content: space-between;
    @media (max-width: $media_width) {
      flex-wrap: wrap;
      padding-top: $pad_half;
    }
    .image-block {
      display: flex;
      flex-basis: 30%;
      min-width: 300px;
      @media (max-width: $media_width) {
        width: fit-content;
        flex-grow: 1;
      }
    }
    .image-fill {
      flex-basis: 60%;
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
    .intro-list {
      display: flex;
      flex-direction: column;
      flex-basis: 40%;
      @media (max-width: $media_width) {
        width: fit-content;
        flex-grow: 1;
      }
    }
  }
  @media (max-width: $media_width) {
    padding-top: 0;
  }
}
</style>
