<template>
  <div class="header">
    <div class="slot-style cont-frame">
      <h1><slot /></h1>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-self: center;
  align-content: center;
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
</style>
