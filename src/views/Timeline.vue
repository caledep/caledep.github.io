<template>
  <main class="timeline-page">
    <PageTitleHeader>Shaping Events</PageTitleHeader>
    <div :class="`timelineDiv ${child_is_open ? 'child_is_open' : ''}`">
      <div v-for="timelinePoint in json" :key="timelinePoint.date">
        <TimelineItem
          :closeAllChildren="close_all_children"
          :childIsOpen="child_is_open"
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
import PageTitleHeader from '../components/PageTitleHeader.vue';
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
main {
  flex-wrap: wrap;
  flex: 1 1 auto;
  color: $primary;
  .timelineDiv {
    display: flex;
    flex-direction: column;
    border: 9px solid $primary;
    border-style: double;
    border-radius: 2em;
    outline: 4px solid $dark-alt;
    outline-offset: -7px;
    overflow: hidden;
    background-color: $timelineClear;
    @media (max-width: $media_width) {
      border: none;
      outline: none;
      background: none;
      overflow: hidden;
      border-radius: 0;
      margin-top: $pad_quart;
    }
  }
  @media (max-width: $media_width) {
    transform: translateX(-6px);
    max-width: fit-content;
  }
}
</style>
