<script setup lang="ts">
import TheProgressPage from '~/components/TheProgressPage.vue'

const isShowProgressPage = useIsDeveloping()
</script>

<template>
  <div class="w-screen h-lvh">
    <TheHome v-if="!isShowProgressPage" />
    <TheProgressPage v-else />
  </div>
</template>

<style scoped>

</style>
