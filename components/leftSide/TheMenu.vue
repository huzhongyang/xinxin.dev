<script setup lang="ts">
const menus = ['Home', 'Writing', 'Journey']
</script>

<template>
  <div>
    <span v-for="menu in menus" :key="menu">{{ menu }}</span>
  </div>
</template>

<style scoped>

</style>
