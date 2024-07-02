<template>
  <main class="projects-page">
    <PageTitleHeader>Projects</PageTitleHeader>
    <div class="projectList">
      <div
        v-for="(updateItem, index) in json.projectList"
        :key="index"
        class="item cont-frame"
      >
        <div class="top">
          <h2>{{ updateItem.heading }}</h2>
          <div class="date">{{ updateItem.date }}</div>
          <!-- <hr /> -->
        </div>
        <div v-for="(p, i) in updateItem.body" :key="i" class="body">
          <br v-if="i > 0" />
          <hr v-else />
          <p>{{ p }}</p>
        </div>
        <div>
          <div v-for="(item, label) in updateItem.list" :key="label">
            <div class="list-item">
              <h4>{{ label }}:</h4>
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import PageTitleHeader from '../components/PageTitleHeader.vue';
import json from '../assets/projects.json';
</script>
<style lang="scss" scoped>
.projectList {
  gap: $pad;
  flex-direction: column-reverse;
  @media (max-width: $media_width) {
    padding-top: $pad_quart;
  }
}
div {
  display: flex;
  flex-direction: column;
}
.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.date {
  text-wrap: nowrap;
}
.item {
  padding-bottom: $pad;
}
.list-item {
  display: flex;
  flex-direction: row;
  h4 {
    flex: 1;
    display: flex;
    justify-self: flex-start;
    @media (max-width: $media_width) {
      width: min-content;
      flex-basis: 50%;
    }
  }
  h4::after {
    content: '';
    border-bottom: 1px dotted;
    flex: 1;
    margin: 0 3px;
    transform: translateY(16px);
    align-self: flex-start;
  }
  p {
    display: flex;
    font-size: 16px;
    @media (max-width: $media_width) {
      width: min-content;
      flex-basis: 50%;
    }
  }
}
</style>
