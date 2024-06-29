<template>
  <main class="education-page">
    <div class="top-block">
      <div class="resume-block">
        <div class="skills-block">
          <div class="cont-frame">
            <h1>{{ json.hSkills.title }}</h1>
            <hr />
            <div>
              <li v-for="hSkill in json.hSkills.skills" :key="hSkill.skill">
                {{ hSkill.skill }}
              </li>
            </div>
          </div>
          <div class="cont-frame">
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
          <div class="education cont-frame">
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
          <div class="achievements cont-frame">
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
            <!-- <div>
              <h2>{{ json.achi.desc3.title }}</h2>
              <h4>{{ json.achi.desc3.event }}</h4>
              <p>{{ json.achi.desc3.desc }}</p>
            </div> -->
          </div>
        </div>
      </div>
      <div class="tech-block cont-frame">
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
    <div class="bottom-block"></div>
  </main>
</template>
<script setup>
import json from '../assets/education.json';
</script>
<style lang="scss" scoped>
main {
  .top-block {
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    gap: $pad;
    padding-top: $pad_half;
    .resume-block {
      display: flex;
      flex-direction: column;
      gap: $pad;
      .skills-block {
        display: flex;
        gap: $pad;
        div {
          flex-basis: 50%;
          li:first-child {
            padding-block-start: $pad_half;
          }
        }
      }
      .edu-block {
        display: flex;
        flex-direction: column;
        gap: $pad;

        .degrees {
          display: flex;
          gap: $pad;
          padding-top: $pad_half;
          div {
            text-align: center;
            flex-basis: 50%;
          }
        }
        .achievements {
          div {
            padding-top: $pad_half;
          }
        }
      }
    }
    .tech-block {
      display: flex;
      flex-direction: column;
      flex-shrink: 1.19;
      h2 {
        padding-top: $pad_half;
        padding-bottom: $pad_half;
      }
      // div:last-child h2 {
      //   padding-top: $pad_double;
      // }
    }
  }
  @media (max-width: $media_width) {
    .skills-block {
      flex-direction: column;
    }
    .degrees {
      display: flex;
      flex-direction: column;
    }
  }
  @media (max-width: 1326px) {
    .top-block {
      flex-wrap: wrap;
      padding-top: $pad_half;
    }
    .tech-block {
      flex-grow: 1;
    }
  }
}
</style>
