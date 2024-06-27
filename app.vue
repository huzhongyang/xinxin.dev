<script setup lang="ts">
import '@unocss/reset/tailwind.css'
import { setupHeader } from '~/composables/setups'

setupHeader()
</script>

<template>
  <div class="w-screen h-lvh">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
html,
body {
  --uno: font-akaya;
}
</style>
