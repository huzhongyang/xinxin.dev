<script setup lang="ts">
import TheProgressPage from '~/components/TheProgressPage.vue'

const isShowProgressPage = useIsDeveloping()
</script>

<template>
  <div class="h-100% w-screen">
    <!-- <TheHome v-if="!isShowProgressPage" /> -->
    <div v-if="!isShowProgressPage">
      <NuxtLayout>
        <template #left>
          <TheLeftSide border="r base" bg-base />
        </template>

        <template #right>
          <TheRightSide />
        </template>
      </NuxtLayout>
    </div>

    <TheProgressPage v-else />
  </div>
</template>

<style scoped>

</style>
