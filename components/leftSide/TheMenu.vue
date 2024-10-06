<script setup lang="ts">
const menuRouter = [
  {
    name: 'Home',
    path: '/',
    icon: 'i-carbon-ibm-cloud-direct-link-2-dedicated-hosting',
  },
  {
    name: 'Writing',
    path: '/writing',
    icon: 'i-carbon-pen-fountain',
  },
  {
    name: 'Journey',
    path: '/journey',
    icon: 'i-carbon-favorite-filled',
  },
]
const curPath = ref('Home')

function menuClicked(menu: any) {
  curPath.value = menu.path
}
</script>

<template>
  <div>
    <client-only>
      <nuxt-link
        v-for="menu in menuRouter" :key="menu.name"
        :to="menu.path"
        grid="~ rows-1 cols-[1.5rem_1fr] items-center gap-3"
        p-2 duration-400 hover:menu-hover-bg
        border="rounded-2xl"
        hover:shadow="~ rounded-2xl"
        @click="menuClicked(menu)"
      >
        <div flex="~ row items-center gap-2" h-6 w-6 :class="menu.icon" />
        <span>{{ menu.name }}</span>
      </nuxt-link>
    </client-only>
  </div>
</template>

<style scoped>

</style>
