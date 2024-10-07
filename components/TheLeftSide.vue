<script setup lang="ts">
import TheMenu from '~/components/leftSide/TheMenu.vue'
import TheOnlineLink from '~/components/leftSide/TheOnlineLink.vue'
import TheResumeTop from '~/components/leftSide/TheResumeTop.vue'
</script>

<template>
  <div px-8px py-10px>
    <TheResumeTop mb-2 />
    <TheMenu />
    <TheOnlineLink border-t="~ bg-base" mt-6 pt-6 />
  </div>
</template>

<style scoped>

</style>
