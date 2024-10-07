<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>

<template>
  <div class="h-100% w-screen">
    <NuxtLayout name="content">
      <template #left>
        <TheLeftSide border="r base" bg-base />
      </template>

      <template #right>
        <TheRightSide />
      </template>
    </NuxtLayout>
  </div>
</template>
