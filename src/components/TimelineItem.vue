<template>
  <div :class="`item ${is_expanded ? 'is_expanded' : ''}`">
    <div class="mobile-space">
      <div class="padding">
        <div class="date">
          <h2>{{ date }}</h2>
        </div>
      </div>
      <div class="timeline">
        <hr class="outline" />
        <hr class="fill" />
        <hr class="marker-outline" />
        <hr class="marker-fill" v-if="is_expanded" />
      </div>
    </div>
    <div class="padding">
      <div class="event">
        <div class="event-description">
          <h2>{{ title }}</h2>
          <p v-if="is_expanded">
            {{ description }}
          </p>
        </div>
        <div class="item-toggle-wrap">
          <button class="item-toggle" @click="ToggleItem">
            <span class="material-symbols-outlined">expand_circle_down</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref, toRefs, watch, watchEffect } from 'vue';
const props = defineProps({
  close_all_children: Boolean,
  child_is_open: Boolean,
  date: Number,
  title: String,
  description: String,
});
const emit = defineEmits([
  'child_expanded',
  'child_closed',
  'close_children',
  'close_reset',
]);
const closer = ref(false);
const is_expanded = ref(false);
const ToggleItem = () => {
  if (props.child_is_open && !is_expanded.value) {
    closer.value = true;
    emit('close_children');
  } else {
    closer.value = false;
  }
  is_expanded.value = !is_expanded.value;
  is_expanded.value ? emit('child_expanded') : emit('child_closed');
};
watch(
  () => props.close_all_children,
  () => {
    if (props.close_all_children) {
      is_expanded.value = closer.value;
      closer.value = false;
      if (is_expanded.value) {
        emit('close_reset');
      }
    }
  },
  {
    immediate: true,
  }
);
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  color: var(--primary);
  .mobile-space {
    display: flex;
    flex-direction: row;
  }
  .padding {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    @media (max-width: 768px) {
      padding: 0rem;
      padding-bottom: 0.5rem;
    }
  }
  .timeline {
    padding-left: 2rem;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
      padding-left: 0rem;
    }
    .outline {
      border-top: 1px solid var(--primary);
      border-right: 4px solid var(--primary);
      border-left: 4px solid var(--primary);
      border-bottom: 1px solid var(--primary);
      @media (max-width: 768px) {
        // transform: translateX(-2.5rem);
        // transform: translateY(-2rem);
        transform: translate(-2.5rem, -2rem);
        z-index: -2;
      }
    }
    .fill {
      border-top: 1px solid var(--dark-alt);
      border-right: 2px solid var(--dark-alt);
      border-left: 2px solid var(--dark-alt);
      border-bottom: 1px solid var(--dark-alt);
      transform: translateX(-6px);
      @media (max-width: 768px) {
        transform: translate(-2.865rem, -2rem);
        z-index: -1;
      }
    }
    .marker-outline {
      border-top: 1px solid var(--primary);
      border-right: 12px solid var(--primary);
      border-left: 12px solid var(--primary);
      border-bottom: 1px solid var(--primary);
      transform: translateX(-20px);
      margin-top: 3.5rem;
      height: 22px;
      border-radius: 2em;
      @media (max-width: 768px) {
        margin-top: 1.625rem;
        display: none;
      }
    }
    .marker-fill {
      border-top: 1px solid var(--dark-alt);
      border-right: 10px solid var(--dark-alt);
      border-left: 10px solid var(--dark-alt);
      border-bottom: 1px solid var(--dark-alt);
      transform: translateX(-42px);
      margin-top: 3.625rem;
      height: 18px;
      border-radius: 2em;
      @media (max-width: 768px) {
        margin-top: 1.75rem;
        display: none;
      }
    }
  }

  .date,
  .event {
    padding: 2rem;
    border: solid;
    background: #fffce2;
    border-width: 3px;
    border-color: #161a4a;
    border-radius: 2em;
    @media (max-width: 768px) {
      padding: 1rem;
      border-raius: 1em;
    }
  }
  .date {
    text-align: center;
    max-height: fit-content;
    width: 4rem;
    @media (max-width: 768px) {
      transform: translateX(0.4rem);
      border-radius: 1em 0 0 1em;
      white-space: normal;
      h2 {
        font-size: 16px;
      }
      width: 3rem;
    }
  }

  .event {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    max-height: fit-content;
    @media (max-width: 768px) {
      transform: translateX(-0.5rem);
      border-radius: 0 1em 1em 1em;
    }
    .event-description {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex: 1;
      transition: 0.4s;
      p {
        flex: 1;
        transition: 0.4s;
      }
      h2 {
        max-width: 30ch;
        flex: 1;
        transition: 0.4s;
        @media (max-width: 768px) {
          white-space: normal;
          font-size: 16px;
        }
      }
    }
    .item-toggle-wrap {
      display: flex;
      justify-items: flex-end;
      align-items: center;
      transition: 0.4s ease-in-out;
      padding-left: 2rem;
      align-self: flex-end;

      .material-symbols-outlined {
        font-size: 34px;
        transition: 0.4s ease-in-out;
        &:hover {
          color: var(--dark-alt);
          @media (max-width: 768px) {
            color: var(--primary);
          }
        }
      }
    }
  }
  &.is_expanded {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      transition: flex-direction 0.4s;
    }
    .padding {
      @media (max-width: 768px) {
        padding-top: 0rem;
        padding-bottom: 0.5rem;
        padding-right: 0.5rem;
        padding-left: 0.5rem;
      }
    }
    .timeline {
      transition: 0.4s;
    }
    .event {
      max-width: fit-content;
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        transform: none;
        transform: translateY(-0.5rem);
        border-radius: 1em;
      }
    }
    .date {
      transition: 0.4s;
      @media (max-width: 768px) {
        background: var(--primary-hover);
        color: var(--dark-alt);
        border-radius: 1em 1em 1em 1em;
      }
    }
    .item-toggle-wrap {
      transition: 0.4s;
      .item-toggle {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
