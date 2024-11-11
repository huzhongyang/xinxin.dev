<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <main>
    <ContentQuery v-slot="{ data }" :path="route.path" find="one">
      <ContentRenderer :value="data" />
    </ContentQuery>
  </main>
</template>
