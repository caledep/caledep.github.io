<template>
  <div v-for="(item, label) in objectList" :key="label">
    <div class="list-item">
      <h2>{{ label }}:</h2>
      <p>{{ item }}</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  objectList: Object,
});
</script>
<style lang="scss" scoped>
.list-item {
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
