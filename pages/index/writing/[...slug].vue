<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <client-only>
    <main>
      <ContentQuery v-slot="{ data }" :path="route.path" find="one">
        <ContentRenderer :value="data" />
      </ContentQuery>
    </main>
  </client-only>
</template>
