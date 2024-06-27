<template>
  <main class="hobbies-page">
    <!-- <ConstructionPage>Hobbies</ConstructionPage> -->
    <PageTitleHeader>Hobbies</PageTitleHeader>
    <div class="button-wrapper">
      <button
        class="cont-frame"
        :class="{ selected: selectedHobby === 'Golf' }"
        @click="selectHobby('Golf')"
      >
        Golf
      </button>
      <button
        class="cont-frame"
        :class="{ selected: selectedHobby === 'Food' }"
        @click="selectHobby('Food')"
      >
        Food
      </button>
      <button
        class="cont-frame"
        :class="{ selected: selectedHobby === 'Explore' }"
        @click="selectHobby('Explore')"
      >
        Explore
      </button>
    </div>
    <InfoImage
      v-if="selectedHobby !== ''"
      :imagePath="imagePath"
      :useIntroBlock="false"
      :introObj="introObj"
      :bodyTitle="bodyTitle"
      :bodyDesc="bodyDesc"
    />
  </main>
</template>
<script setup>
import PageTitleHeader from '../components/PageTitleHeader.vue';
import InfoImage from '../components/InfoImage.vue';
import json from '../assets/hobbies.json';
import { ref, watch } from 'vue';
const imagePath = ref('');
let introObj, bodyTitle, bodyDesc;
const selectedHobby = ref('');
const selectHobby = (hobby) => {
  selectedHobby.value = hobby;
  imagePath.value = '/src/assets/images/' + hobby.toLowerCase() + '.jpg';
  switch (hobby) {
    case 'Golf':
      introObj = json.golf.details;
      bodyTitle = json.golf.desc.title;
      bodyDesc = json.golf.desc.body;
      break;
    case 'Food':
      introObj = json.food.details;
      bodyTitle = json.food.desc.title;
      bodyDesc = json.food.desc.body;
      break;
    default:
      introObj = json.explore.details;
      bodyTitle = json.explore.desc.title;
      bodyDesc = json.explore.desc.body;
  }
};
watch(selectedHobby, (newVal) => {
  console.log('Hobby changed to:', newVal);
});

const objGolf = json.golf.details;
const objExplore = {
  Activity: selectedHobby,
  location: 'My Kitchen',
  Strategy: 'Do it cheap',
};
const objCook = {
  Activity: 'Cook',
  location: 'My Kitchen',
  Strategy: 'Do it cheap',
};
</script>
<style lang="scss">
main {
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-grow: 1;
  gap: 0;
  .button-wrapper {
    display: flex;
    flex-direction: row;
    padding-top: 0;
    button {
      flex-basis: 10%;
      padding: $pad_half $pad;
      margin: 0 $pad_half $pad_half;
      border-radius: 1.5em;
      flex-grow: 4;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }
    button:hover {
      background-color: $dark-alt;
    }
    button.selected {
      transition: 0.4s ease-out;
      background-color: $primary-hover;
      flex-grow: 5;
      color: $dark-alt;
      font-weight: bolder;
    }
  }
  @media (max-width: $media_width) {
    .button-wrapper {
      button {
        padding: $pad_quart $pad_half;
        font-size: 16px;
        margin: 8px;
        flex-grow: 4;
        border-radius: 1em;
      }
      button.selected {
        flex-grow: 4;
      }
    }
  }
}
</style>
