<script setup lang="ts">
const isShowProgressPage = useIsDeveloping()
</script>

<template>
  <div>
    <!-- <TheNav v-show="!isShowProgressPage" /> -->
    <slot />
  </div>
</template>

<style scoped>

</style>
