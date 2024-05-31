
<template>
  <main class="education-page">
     <div class="top-block">
        <div class="resume-block">
           <div class="skills-block">
              <div class="cell">
                 <h1>{{ title.hSkillTitle }}</h1>
                 <hr>
                 <div>
                    <li v-for="hSkill in hSkills" :key="hSkill.skill">
                       {{ hSkill.skill }}
                    </li>
                 </div>
              </div>
              <div class="cell">
                 <h1>{{ title.sSkillTitle }}</h1>
                 <hr>
                 <div>
                    <li v-for="sSkill in sSkills" :key="sSkill.skill">
                       {{ sSkill.skill }}
                    </li>
                 </div>
              </div>
           </div>
           <div class="edu-block">
              <div class="education cell">
                 <h1>{{ title.eduTitle }}</h1>
                 <hr>
                 <div class="degrees">
                    <div>
                       <h2>{{ title.eduSubTitle1 }}</h2>
                       <p>{{ desc.edu1 }}</p>
                       <p>{{ desc.eduLoc1 }}</p>
                       <p>{{ desc.eduDate1 }}</p>
                    </div>
                    <hr>
                    <div>
                       <h2>{{ title.eduSubTitle2 }}</h2>
                       <p>{{ desc.edu2 }}</p>
                       <p>{{ desc.eduLoc2 }}</p>
                       <p>{{ desc.eduDate2 }}</p>
                    </div>
                 </div>
              </div>
              <div class="achievements cell">
                 <h1>{{ title.achiTitle }}</h1>
                 <hr>
                 <div>
                    <h2>{{ title.achiSubTitle1 }}</h2>
                    <h4>{{ desc.achi1 }}</h4>
                    <p>{{ desc.achiDesc1 }}</p>
                 </div>
                 <div>
                    <h2>{{ title.achiSubTitle2 }}</h2>
                    <h4>{{ desc.achi2 }}</h4>
                    <p>{{ desc.achiDesc2 }}</p>
                 </div>
                 <div>
                    <h2>{{ title.achiSubTitle3 }}</h2>
                    <h4>{{ desc.achi3 }}</h4>
                    <p>{{ desc.achiDesc3 }}</p>
                 </div>
              </div>
           </div>
        </div>
        <div class="tech-block cell">
           <h1>{{ title.tSkillTitle }}</h1>
           <hr>
           <div>
           <h2>{{ title.tSkillSubTitle1 }}</h2>
           <li v-for="tSkill in tSkills1" :key="tSkill.skill">
              {{ tSkill.skill }}
           </li>
        </div>
        <div>
           <h2>{{ title.tSkillSubTitle2 }}</h2>
           <li v-for="tSkill in tSkills2" :key="tSkill.skill">
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
  import { ref } from 'vue';
  const title = {hSkillTitle: 'Hard Skills',
                 sSkillTitle: "Soft Skills",
                 tSkillTitle: "Technical Skills",
                 tSkillSubTitle1: "Language Proficiencies:",
                 tSkillSubTitle2: "Additional Skills:",
                 eduTitle: "Education",
                 eduSubTitle1: "Associates of Science in Computer Science",
                 eduSubTitle2: "Bachelors of Science in Orginizational Management",
                 achiTitle: "Achievements",
                 achiSubTitle1: "Lead Front End Software Engineer",
                 achiSubTitle2: "Wyohackathon 2019 Participant",
                 achiSubTitle3: "Top Software Team"}
  const desc = {edu1: "Casper College",
                edu2: "University of Wyoming",
                eduLoc1: "Casper, Wyoming",
                eduLoc2: "Laramie, Wyoming",
                eduDate1: "July 2017",
                eduDate2: "December 2024",
                achi1: "myStrenth team (Teladoc Health)",
                achiDesc1: "In November 2023, I became the lead front end software engineer for migrating the myStrength services and clients into the unified oneApp platform of Teladoc.",
                achi2: "Breakin Through! Blockchain and Crypto (University of Wyoming)",
                achiDesc2: "Part of a team of four, that leveraged blockchain technologies integrated into a website to streamline the blockchain tokenization process.",
                achi3: "Software Engineering Course (University of Wyoming)",
                achiDesc3: "I was the lead developer for this team of four, hosted additional Java lectures and  learning sessions to help increase the abilities and knowledge of my team.",}
  const hSkills = ref([{ skill: 'Software Engineering'},
                       { skill: 'Full Cycle Development'},
                       { skill: 'Database Management'},
                       { skill: 'Testing/Debugging'},
                       { skill: 'Web Development'},
                       { skill: 'OOP/OOD'},
                       { skill: 'Data Analysis'},
                       { skill: 'Agile Skills'},
                       { skill: 'System Design'},
                       { skill: 'Wire Framing'}])
  const sSkills = ref([{ skill: 'Problem Solving'},
                       { skill: 'Self-Management'},
                       { skill: 'Adaptability'},
                       { skill: 'Communication'},
                       { skill: 'Public Speaking'},
                       { skill: 'Ownership'},
                       { skill: 'Persistence'},
                       { skill: 'Orginization'},
                       { skill: 'Attention to Detail'},
                       { skill: 'Master of Learning'}])
  const tSkills1 = ref([{ skill: 'Java'},
                        { skill: 'c'},
                        { skill: 'c++'},
                        { skill: 'c#'},
                        { skill: 'JavaScript'},
                        { skill: 'HTML/CSS'},
                        { skill: 'python'},
                        { skill: 'SQL'},
                        { skill: 'Bash'},
                        { skill: 'Vue'}])
  const tSkills2 = ref([{ skill: 'Data Structures & Algorithms'},
                        { skill: 'Computer Networking'},
                        { skill: 'Collaboration'},
                        { skill: 'Pair Programming'},
                        { skill: 'Stand Ups'},
                        { skill: 'Sprint Planning'},
                        { skill: 'Quarterly Planning'},
                        { skill: 'Version Control'},
                        { skill: 'Deployment'},
                        { skill: 'Containerization'},
                        { skill: 'DBMS/RDBMS'},
                        { skill: 'Hippa Standards'},
                        { skill: 'WCAG Compliance'},
                        { skill: 'Development Piplines'},
                        { skill: 'Unit Testing/e2e Testing'},
                        { skill: 'Code Reviews & Feedback'},
                        { skill: 'Technical Documentation'},
                        { skill: 'Speaking about technical ideas with technical and non-technical audiences'},
                        { skill: 'Project Tracking Software'}])
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
      background: #FFFCE2;
      border: solid;
      border-width: 0.2rem;
      border-color: var(--primary);
      border-radius:2em; 
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
      flex-wrap:wrap;
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
      div{
         text-align: center;
         max-width: 24rem;
      }
   }
   .achievements {
      div {
         padding-top: 1rem;
      }
   }
   @media (max-width:768px) {
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