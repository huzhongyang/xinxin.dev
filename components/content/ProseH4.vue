<script lang="ts" setup>
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h4)))
</script>

<template>
  <h4 :id="props.id" typography-h4>
    <a
      v-if="props.id && generate"
      :href="`#${props.id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h4>
</template>
