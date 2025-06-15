<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
})
const copyButtonVisible = ref(false)

function copyClicked() {
  navigator.clipboard.writeText(props.code)
}
</script>

<template>
  <div
    my-1 w-prose relative
    @mouseleave="copyButtonVisible = false"
    @mouseenter="copyButtonVisible = true"
  >
    <transition name="fade-button">
      <button
        v-show="copyButtonVisible"
        border="~ gray/20 rounded-lg"
        class="text-sm text-gray p-2px cursor-pointer right-2 top-2 absolute active:text-black dark:text-gray hover:text-black dark:hover:text-white"
        @click="copyClicked"
      >
        copy
      </button>
    </transition>
    <pre
      flex="~ col"
      border="1px gray/20 rounded-2xl" p2 overflow-x-auto bg-base
      :class="$props.class"
      class="no-scrollbar"
    >
      <slot />
    </pre>
  </div>
</template>

<style scoped lang="scss">
.no-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
.no-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}
.fade-button-enter-active,
.fade-button-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
