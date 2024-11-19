<script setup lang="ts">
import { setupHeader } from '~/composables/setups'
import '@unocss/reset/tailwind.css'
import '~/styles/var.css'

setupHeader()
</script>

<template>
  <div class="w-screen h-lvh">
    <NuxtPage />
  </div>
</template>

<style lang="scss">
  html,
body {
  --uno: font-base;
}
</style>
