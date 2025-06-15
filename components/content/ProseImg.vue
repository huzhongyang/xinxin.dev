<script setup lang="ts">
import ImageComponent from '#build/mdc-image-component.mjs'

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
})
</script>

<template>
  <div flex="~ justify-center items-center">
    <component
      :is="ImageComponent"
      border="1px gray/20 rounded-2xl"
      :src="src"
      :alt="props.alt"
      :width="props.width"
    />
  </div>
</template>
