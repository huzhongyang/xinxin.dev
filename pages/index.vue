<script setup lang="ts">
import TheProgressPage from '~/components/TheProgressPage.vue'

const isShowProgressPage = useIsDeveloping()
</script>

<template>
  <div class="h-100% w-screen">
    <TheHome v-if="!isShowProgressPage" />
    <TheProgressPage v-else />
  </div>
</template>

<style scoped>

</style>
