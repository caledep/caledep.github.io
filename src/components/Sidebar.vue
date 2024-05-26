<template>
    <aside :class="`${is_expanded ? 'is_expanded' : ''}`">
        <div class="logo">
          <img src="../assets/cd_logo.svg" class="logo-icon" alt="vue">
        </div>

        <div class="menu-toggle-wrap">
          <button class="menu-toggle" @click="ToggleMenu">
            <span class="material-icons">keyboard_double_arrow_right</span>
          </button>
        </div>


        <div class="menu">
          <router-link class="button" to="/">
            <span class="material-icons">home</span>
            <span class="text">Home</span>
          </router-link>
          <router-link class="button" to="/education">
            <span class="material-icons">school</span>
            <span class="text">Education & skills</span>
          </router-link>
          <router-link class="button" to="/timeline">
            <span class="material-icons">timeline</span>
            <span class="text">Timeline</span>
          </router-link>
          <router-link class="button" to="/projects">
            <span class="material-icons">work_history</span>
            <span class="text">Projects</span>
          </router-link>
          <router-link class="button" to="/hobbies">
            <span class="material-icons">golf_course</span>
            <span class="text">Hobbies</span>
          </router-link>

        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue'

const is_expanded = ref(false)

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
}
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem);
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: visible;
  padding: 1rem;
  background-color: var(--primary);
  color: var(--light);
  transition: 0.4s ease-out;
  .logo {
    display: flex;
    .button {
      display: flex;
      text-decoration: none;
      transition: 0.4s ease-out;
      .logo-icon {
        font-size: 2rem;
        color: var(--light);
        transition: 0.4s ease-out;
      }
    }
    img {
      width: 2rem;
    }
    .text {
      opacity: 0;
    }
    &:hover {
      .text {
        color: var(--dark-alt)
      }
    }
  }
  
  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 4rem;
    position: relative;
    top: 0.5rem;
    transition: 0.4s ease-out;
    .menu-toggle {
      transition: 0.4s ease-out;
      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.4s ease-out;
      }
      &:hover {
        .material-icons {
          color: var(--dark-alt);
          transform: translateX(0.3rem);
        }
      }
    }
  }

  .button .text {
    opacity: 0;
    transition: 0.5s ease-out;
  }

  .menu {
    margin: 0 -1rem;
    justify-content: center;
    padding-top: 6rem;
    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0.5rem 1rem;
      transition: 0.4s ease-out;
      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.4s ease-out;
      }
      .text {
        color: var(--light);
        transition: 0.4s ease-out;
      }
      &:hover, &.router-link-exact-active {
        background-color: var(--primary-hover);
        .material-icons, .text {
          color: var(--dark-alt);
        }
      }
      &.router-link-exact-active {
        border-right: 6px solid var(--dark-alt);
      }
    }
  }

  &.is_expanded {
    width: var(--sidebar-width);
    .menu-toggle-wrap {
      top: -2.25rem;
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }
    h3, .button .text {
      opacity: 1;
    }
    .logo {
      .text {
        color: var(--light);
      }
      .button {
        .logo-icon {
          margin-right: 1rem;
        }
    }
    }
    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
    height: 100%;
  }
}
</style>