<template>
  <main class="timeline-page">
    <div class="header">
      <div class="card">
        <h1>Shaping Events</h1>
      </div>
    </div>
    <div :class="`timelineDiv ${child_is_open ? 'child_is_open' : ''}`">
      <div v-for="timelinePoint in json" :key="timelinePoint.date">
        <TimelineItem
          :close_all_children="close_all_children"
          :child_is_open="child_is_open"
          :date="timelinePoint.date"
          :title="timelinePoint.title"
          :description="timelinePoint.desc"
          @child_expanded="is_child_expanded"
          @child_closed="child_closed"
          @close_children="close_children"
          @close_reset="close_reset"
        />
      </div>
    </div>
  </main>
</template>
<script setup>
import TimelineItem from '../components/TimelineItem.vue';
import { ref } from 'vue';
import json from '../assets/timeline.json';
const close_all_children = ref(false);
const child_is_open = ref(false);
const is_child_expanded = () => {
  child_is_open.value = true;
};
const child_closed = () => {
  child_is_open.value = false;
};
const close_children = () => {
  child_is_open.value = false;
  close_all_children.value = true;
};
const close_reset = () => {
  close_all_children.value = false;
};
</script>
<style lang="scss" scoped>
.timeline-page {
  max-width: fit-content;
  flex-wrap: wrap;
  flex: 1 1 auto;
  color: var(--primary);
}
.timelineDiv {
  display: flex;
  flex-direction: column;
  border: 9px solid var(--primary);
  border-style: double;
  border-radius: 2em;
  outline: 4px solid var(--dark-alt);
  outline-offset: -7px;
  overflow: hidden;
  background-color: rgba(35, 39, 87, 0.1);
  &.child_is_open {
    max-width: 90.5rem;
  }
  @media (max-width: 768px) {
    border: none;
    outline: none;
    background: none;
    overflow: hidden;
    border-radius: 0;
  }
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  padding: 1rem;
}
.card {
  padding: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: solid;
  background: #fffce2;
  border-width: 3px;
  border-color: #161a4a;
  border-radius: 1.5em;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 16px;
    border-radius: 2em;
  }
}
</style>
