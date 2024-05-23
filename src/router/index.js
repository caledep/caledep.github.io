import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import Education from "../views/Education.vue"
import Timeline from "../views/Timeline.vue"
import Projects from "../views/Projects.vue"
import Hobbies from "../views/Hobbies.vue"


const router = createRouter({
   history: createWebHistory(),
   routes:[
      {
         path: '/',
         component: Home
      },
      {
         path: '/education',
         component: Education
      },
      {
         path: '/timeline',
         component: Timeline
      },
      {
         path: '/projects',
         component: Projects
      },
      {
         path: '/hobbies',
         component: Hobbies
      }
   ]
});

export default router