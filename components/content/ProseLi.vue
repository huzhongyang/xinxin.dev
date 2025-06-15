<script setup lang="ts">
const liRef = useTemplateRef<HTMLElement>('liRef')
const parentElement = ref<HTMLElement | null>(null)
const parentElementName = computed(() => {
  // UL, OL, class include contains-task-list
  return parentElement.value?.classList.contains('contains-task-list')
    ? 'TaskList'
    : parentElement.value?.tagName === 'UL' || parentElement.value?.tagName === 'OL'
      ? parentElement.value.tagName
      : ''
})

onMounted(() => {
  parentElement.value = liRef.value?.parentElement as HTMLElement
})
</script>

<template>
  <li
    ref="liRef"
    typography-li
    :class="(parentElementName === 'OL' || parentElementName === 'TaskList') && 'pl-0'"
  >
    <span v-if="parentElementName === 'UL'" class="i-carbon-diamond-solid" typography-li-marker />
    <slot />
  </li>
</template>
