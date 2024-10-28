<script setup lang="ts">
import { type Menu, menuRouter, type MenusPath } from '~/types'

const curPath = ref<MenusPath>('Home')

function menuClicked(menu: Menu) {
  curPath.value = menu.name as MenusPath
}
</script>

<template>
  <nuxt-link
    v-for="menu in menuRouter" :key="menu.name"
    :to="menu.path"
    grid="~ rows-1 cols-[1rem_1fr] items-center gap-3"
    my-2 p-2 duration-400
    border="rounded-2xl"
    hover:shadow="~ rounded-2xl"
    :class="[curPath === menu.name ? 'cur-path' : 'hover:menu-hover-bg']"
    @click="menuClicked(menu)"
  >
    <div h-4 w-4 :class="[menu.icon, menu.name === curPath ? 'bg-white' : '']" />
    <span>{{ menu.name }}</span>
  </nuxt-link>
</template>

<style scoped>

</style>
