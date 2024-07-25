<script setup lang="ts">
import '@unocss/reset/tailwind.css'
import { setupHeader } from '~/composables/setups'

setupHeader()
</script>

<template>
  <div class="w-screen h-lvh" bg="~ gray" bg-gradient="to-45 from-gray-500 via-gray-600 to-gray-700">
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

.root-bg {
  background-color: gray;
  background-image: linear-gradient(45deg, #000 5%, #fff 5%),
    linear-gradient(#000 5%, #fff 5%);
  background-size: 20px 20px;
}
</style>
