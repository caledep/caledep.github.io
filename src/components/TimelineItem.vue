<template>
  <div :class="`item ${is_expanded ? 'is_expanded' : ''}`">
    <div class="mobile-space">
      <div class="padding">
        <div class="date cont-frame" @click="ToggleItem">
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
      <div class="event cont-frame">
        <div class="event-description">
          <h2>{{ title }}</h2>
          <div class="description" v-if="is_expanded">
            <p v-for="(p, index) in description" :key="index">
              <br v-if="index > 0" />
              {{ p.p }}
            </p>
          </div>
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
  date: String,
  title: String,
  description: Array,
});
const index = ref(0);
const emit = defineEmits([
  'child_expanded',
  'child_closed',
  'close_children',
  'close_reset',
]);
const closer = ref(false);
const is_expanded = ref(false);
function closeChildren() {
  closer.value = true;
  emit('close_children');
}
function otherChildOpen() {
  return props.child_is_open && !is_expanded.value;
}
const ToggleItem = () => {
  otherChildOpen() ? closeChildren() : (closer.value = false);
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
  color: $primary;
  .mobile-space {
    display: flex;
    flex-direction: row;
  }
  .padding {
    padding-left: $pad;
    padding-right: 0;
    padding-top: $pad_half;
    padding-bottom: $pad_half;
    @media (max-width: $media_width) {
      padding: 0;
      padding-bottom: $pad_quart;
    }
  }
  .timeline {
    padding-left: $pad;
    display: flex;
    flex-direction: row;
    @media (max-width: $media_width) {
      padding-left: 0;
    }
    .outline {
      width: 100%;
      border-top: 1px solid $primary;
      border-right: 4px solid $primary;
      border-left: 4px solid $primary;
      border-bottom: 1px solid $primary;
      @media (max-width: $media_width) {
        transform: translate(-40px, -32px);
        z-index: -1;
      }
    }
    .fill {
      border-top: 1px solid $dark-alt;
      border-right: 2px solid $dark-alt;
      border-left: 2px solid $dark-alt;
      border-bottom: 1px solid $dark-alt;
      transform: translateX(-6px);
      @media (max-width: $media_width) {
        transform: translate(-46px, -32px);
        z-index: -1;
      }
    }
    .marker-outline {
      border-top: 1px solid $primary;
      border-right: 12px solid $primary;
      border-left: 12px solid $primary;
      border-bottom: 1px solid $primary;
      transform: translateX(-20px);
      height: 22px;
      border-radius: 2em;
      align-self: center;
      @media (max-width: $media_width) {
        display: none;
      }
    }
    .marker-fill {
      border-top: 1px solid $dark-alt;
      border-right: 10px solid $dark-alt;
      border-left: 10px solid $dark-alt;
      border-bottom: 1px solid $dark-alt;
      transform: translateX(-42px);
      height: 18px;
      border-radius: 2em;
      align-self: center;
      @media (max-width: $media_width) {
        display: none;
      }
    }
  }
  .date {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    @media (max-width: $media_width) {
      transform: translateX(6px);
      border-radius: 1em 0 0 1em;
      height: 40px;
      h2 {
        font-size: 16px;
      }
      width: $pad_double;
    }
  }
  .event {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    max-height: fit-content;
    transform: translateX(-32px);
    @media (max-width: $media_width) {
      transform: translateX(-8px);
      border-radius: 0 1em 1em 0em;
      min-width: 280px;
      height: 40px;
    }
    .event-description {
      display: flex;
      flex-direction: column;
      justify-items: center;
      flex: 1;
      transition: 0.4s;
      .description {
        flex: 1;
        transition: 0.4s;
        max-height: 0;
        overflow: hidden;
      }
      h2 {
        max-width: 30ch;
        flex: 1;
        transition: 0.4s;
        display: flex;
        align-items: center;
        @media (max-width: $media_width) {
          font-size: 16px;
        }
      }
    }
    .item-toggle-wrap {
      display: flex;
      justify-items: flex-end;
      align-items: center;
      transition: 0.4s ease-in-out;
      padding-left: $pad;
      align-self: flex-end;

      .material-symbols-outlined {
        font-size: 34px;
        transition: 0.4s ease-in-out;
        &:hover {
          color: $dark-alt;
          @media (max-width: $media_width) {
            color: $primary;
          }
        }
      }
    }
  }
  &.is_expanded {
    .padding {
      align-self: center;
      @media (max-width: $media_width) {
        padding-top: 0;
        padding-bottom: $pad_quart;
        padding-right: $pad_quart;
        padding-left: $pad_quart;
        align-self: flex-start;
      }
    }
    .timeline {
      transition: 0.4s;
      @media (max-width: $media_width) {
        .fill {
          transform: translate(24px, -32px);
        }
        .outline {
          min-height: $pad_double;
          transform: translate(30px, -32px);
        }
      }
    }
    .event {
      display: flex;
      flex-direction: column;
      max-width: fit-content;
      z-index: -1;

      @media (max-width: $media_width) {
        transform: none;
        border-radius: 1em;
        height: fit-content;
      }
      .event-description {
        h2 {
          @media (max-width: $media_width) {
            padding-left: 104px;
          }
        }
        .description {
          transition: 1s;
          padding-top: $pad_half;
          max-height: fit-content;
          overflow: visible;
          padding-left: 4px;
          padding-right: 4px;
          @media (max-width: $media_width) {
            padding-top: $pad;
            padding-left: $pad_quart;
            padding-right: $pad_quart;
            p {
              font-size: 16px;
            }
          }
        }
      }
    }
    .date {
      transition: 0.4s;
      @media (max-width: $media_width) {
        background: $primary-hover;
        color: $dark-alt;
        border-radius: 1em 0em 1em 0em;
        position: absolute;
        z-index: 1;
        transform: translateX(28px);
        height: fit-content;
      }
    }
    .item-toggle-wrap {
      transition: 0.4s;
      .item-toggle {
        transform: rotate(180deg);
      }
    }
    @media (max-width: $media_width) {
      display: flex;
    }
  }
}
</style>
