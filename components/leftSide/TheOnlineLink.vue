<script setup lang="ts">
import { onlineLinks } from '~/types'
</script>

<template>
  <div>
    <span text="12px" pl2>Online</span>
    <nuxt-link
      v-for="online in onlineLinks" :key="online.name"
      :to="online.url" my-2 p-2
      grid="~ rows-1 cols-[1rem_1fr_1rem] items-center gap-3"
      duration-400
      border="rounded-2xl"
      hover:shadow="~ rounded-2xl"
      hover:menu-hover-bg
    >
      <div :class="online.icon" h-4 w-4 />
      <span>{{ online.name }}</span>
      <div class="i-lucide-external-link h-4 w-4" />
    </nuxt-link>
    <div />
  </div>
</template>

<style scoped>

</style>
