<script setup lang="ts">
/**
 * 需要禁用默认布局, 才可以使用具名插槽
 */
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
