<script setup lang="ts">
const isShowProgressPage = useIsDeveloping()
</script>

<template>
  <div>
    <!-- <TheNav v-show="!isShowProgressPage" /> -->
    <slot />

    <div grid="~ cols-[250px_1fr] rows-1" w-screen h-lvh>
      <slot name="left" />
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>

</style>
