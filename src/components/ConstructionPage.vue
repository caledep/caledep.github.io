<template>
  <div class="construction-page">
    <PageTitleHeader><slot /></PageTitleHeader>
    <div class="body cont-frame">
      <div>
        <img
          src="../assets/images/icon_construction_dark.svg"
          class="icon"
          alt="construction icon"
        />
      </div>
      <div>
        <h2 class="notice">
          {{ msg }}
        </h2>
      </div>
      <div>
        <img
          src="../assets/images/icon_construction_dark.svg"
          class="icon"
          alt="construction icon"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import PageTitleHeader from './PageTitleHeader.vue';
const msg = 'This page is currently undergoing development, check back later.';
</script>
<style lang="scss" scoped>
.construction-page {
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-grow: 1;
  .header {
    display: flex;
    align-self: center;
    font-size: 24px;
    padding: $pad;
    padding-top: $pad_half;
    .slot-style {
      padding-top: $pad_half;
      padding-bottom: $pad_half;
      border-radius: 1.5em;
    }
    @media (max-width: $media_width) {
      font-size: 16px;
      padding: $pad_half;
    }
  }
  .body {
    display: flex;
    align-items: center;
    align-self: center;
    .notice {
      padding-left: $pad_double;
      padding-right: $pad_double;
      @media (max-width: $media_width) {
        padding: 0;
        padding-left: $pad_half;
        padding-right: $pad_half;
        text-align: center;
      }
    }
  }
  img {
    min-width: fit-content;
    @media (max-width: $media_width) {
      min-width: $pad;
    }
  }
  @media (max-width: $media_width) {
    min-width: fit-content;
    gap: $pad_quart;
  }
}
</style>
