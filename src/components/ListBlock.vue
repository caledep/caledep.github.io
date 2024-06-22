<template>
  <div v-for="(subj, label) in objectList" :key="label">
    <div class="list">
      <h2>{{ label }}:</h2>
      <p>{{ subj }}</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  objectList: Object,
});
</script>
<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: row;
  h2 {
    font-weight: bold;
    flex: 1;
    display: flex;
  }
  h2::after {
    content: '';
    border-bottom: 1px dotted;
    flex: 1;
    margin: 0 3px;
    transform: translateY(-6px);
  }
  p {
    font-size: 24px;
  }
}
</style>
