<template>
  <aside :class="`${is_expanded ? 'is_expanded' : ''}`">
    <div class="logo">
      <img src="../assets/images/cd_logo.svg" class="logo-icon" alt="vue" />
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
        <span class="text">Education/Skills</span>
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
import { ref } from 'vue';
const is_expanded = ref(false);
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
};
</script>
<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  min-width: $pad;
  width: calc($pad);
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: visible;
  padding: $pad_half;
  background-color: $primary;
  color: $light;
  transition: 0.4s ease-out;
  position: fixed;
  .logo {
    display: flex;
    .button {
      display: flex;
      text-decoration: none;
      transition: 0.4s ease-out;
      .logo-icon {
        font-size: 32px;
        color: $light;
        transition: 0.4s ease-out;
      }
    }
    img {
      width: $pad;
    }
    .text {
      opacity: 0;
    }
    &:hover {
      .text {
        color: $dark-alt;
      }
    }
  }
  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: $pad_double;
    position: relative;
    top: $pad_quart;
    transition: 0.4s ease-out;
    .menu-toggle {
      transition: 0.4s ease-out;
      .material-icons {
        font-size: 32px;
        color: $light;
        transition: 0.4s ease-out;
      }
      &:hover {
        .material-icons {
          color: $dark-alt;
          transform: translateX(5px);
        }
      }
    }
  }
  .button .text {
    opacity: 0;
    transition: 0.5s ease-out;
    flex-wrap: nowrap;
  }
  .menu {
    display: flex;
    flex-direction: column;
    margin: 0 -16px;
    justify-content: center;
    padding-bottom: 160px;
    flex-grow: 1;
    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      flex-wrap: nowrap;

      padding: $pad_quart $pad_half;
      transition: 0.4s ease-out;
      .material-icons {
        font-size: 32px;
        color: $light;
        transition: 0.4s ease-out;
      }
      .text {
        color: $light;
        transition: 0.4s ease-out;
      }
      &:hover,
      &.router-link-exact-active {
        background-color: $primary-hover;
        .material-icons,
        .text {
          color: $dark-alt;
        }
      }
      &.router-link-exact-active {
        border-right: 6px solid $dark-alt;
      }
    }
  }
  &.is_expanded {
    min-width: $sidebar-width;
    width: $sidebar-width;
    .menu-toggle-wrap {
      top: -36px;
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }
    h3,
    .button .text {
      opacity: 1;
    }
    .logo {
      .text {
        color: $light;
      }
      .button {
        .logo-icon {
          margin-right: $pad_half;
        }
      }
    }
    .button {
      .material-icons {
        margin-right: $pad_half;
      }
    }
  }
  @media (max-width: $media_width) {
    z-index: 99;
    height: 100%;
  }
}
</style>
