<template>
  <main class="projects-page">
    <div class="header">
      <div class="card">
        <h1>Projects</h1>
      </div>
    </div>
    <div class="body">
      <p class="construction_notice">
        <img
          src="../assets/images/icon_construction_dark.svg"
          class="icon"
          alt="construction icon"
        />
        <b class="notice"
          >This page is currently undergoing development, check back later.</b
        >
        <img
          src="../assets/images/icon_construction_dark.svg"
          class="icon"
          alt="construction icon"
        />
      </p>
    </div>
  </main>
</template>
<script setup></script>
<style scoped>
.projects-page {
  max-width: 87rem;
  color: var(--primary);
}
.construction_notice {
  display: flex;
  width: fit-content;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  padding: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: solid;
  background: #fffce2;
  border-width: 3px;
  border-color: #161a4a;
  border-radius: 1.5em;
}
.notice {
  padding-left: 4rem;
  padding-right: 4rem;
  @media (max-width: 768px) {
    padding: 0rem;
  }
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  padding: 1rem;
}
.body {
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
