<template>
  <main class="education-page">
    <div class="top-block">
      <div class="resume-block">
        <div class="skills-block">
          <div class="cell">
            <h1>{{ json.hSkills.title }}</h1>
            <hr />
            <div>
              <li v-for="hSkill in json.hSkills.skills" :key="hSkill.skill">
                {{ hSkill.skill }}
              </li>
            </div>
          </div>
          <div class="cell">
            <h1>{{ json.sSkills.title }}</h1>
            <hr />
            <div>
              <li v-for="sSkill in json.sSkills.skills" :key="sSkill.skill">
                {{ sSkill.skill }}
              </li>
            </div>
          </div>
        </div>
        <div class="edu-block">
          <div class="education cell">
            <h1>{{ json.edu.title }}</h1>
            <hr />
            <div class="degrees">
              <div>
                <h2>{{ json.edu.desc1.title }}</h2>
                <p>{{ json.edu.desc1.sch }}</p>
                <p>{{ json.edu.desc1.loc }}</p>
                <p>{{ json.edu.desc1.date }}</p>
              </div>
              <hr />
              <div>
                <h2>{{ json.edu.desc2.title }}</h2>
                <p>{{ json.edu.desc2.sch }}</p>
                <p>{{ json.edu.desc2.loc }}</p>
                <p>{{ json.edu.desc2.date }}</p>
              </div>
            </div>
          </div>
          <div class="achievements cell">
            <h1>{{ json.achi.title }}</h1>
            <hr />
            <div>
              <h2>{{ json.achi.desc1.title }}</h2>
              <h4>{{ json.achi.desc1.event }}</h4>
              <p>{{ json.achi.desc1.desc }}</p>
            </div>
            <div>
              <h2>{{ json.achi.desc2.title }}</h2>
              <h4>{{ json.achi.desc2.event }}</h4>
              <p>{{ json.achi.desc2.desc }}</p>
            </div>
            <div>
              <h2>{{ json.achi.desc3.title }}</h2>
              <h4>{{ json.achi.desc3.event }}</h4>
              <p>{{ json.achi.desc3.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tech-block cell">
        <h1>{{ json.tSkills.title.main }}</h1>
        <hr />
        <div>
          <h2>{{ json.tSkills.title.sub1 }}</h2>
          <li v-for="tSkill in json.tSkills.set1" :key="tSkill.skill">
            {{ tSkill.skill }}
          </li>
        </div>
        <div>
          <h2>{{ json.tSkills.title.sub2 }}</h2>
          <li v-for="tSkill in json.tSkills.set2" :key="tSkill.skill">
            {{ tSkill.skill }}
          </li>
        </div>
      </div>
    </div>
    <div class="bottom-block">
      <h1></h1>
      <div></div>
    </div>
  </main>
</template>
<script setup>
import json from '../assets/education.json';
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: var(--primary);

  li {
    font-size: 22px;

    position: -12px;
    padding-left: 20px;
  }
  p {
    font-size: 18px;
  }
  hr {
    border-color: var(--primary-hover);
  }
  .cell {
    padding: 2rem;
    background: #fffce2;
    border: solid;
    border-width: 0.2rem;
    border-color: var(--primary);
    border-radius: 2em;
  }
  .top-block {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .bottom-block {
    max-width: 87rem;
  }
  .resume-block {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .skills-block {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    max-width: 60rem;
    gap: 2rem;
    div {
      flex-grow: 1;
      li:first-child {
        padding-block-start: 1rem;
      }
    }
  }
  .edu-block {
    display: flex;
    flex-direction: column;
    max-width: 60rem;
    gap: 2rem;
  }
  .tech-block {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    max-width: 25rem;
    min-width: 20rem;
    h2 {
      padding-top: 2rem;
      padding-bottom: 1rem;
    }
  }
  .degrees {
    display: flex;
    gap: 2rem;
    padding-top: 1rem;
    div {
      text-align: center;
      max-width: 24rem;
    }
  }
  .achievements {
    div {
      padding-top: 1rem;
    }
  }
  @media (max-width: 768px) {
    li {
      padding-left: 4px;
    }
    .degrees {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
