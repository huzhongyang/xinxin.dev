<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blogs').path(route.path).first()
})
</script>

<template>
  <client-only>
    <ContentRenderer v-if="page" :value="page" />
  </client-only>
</template>
