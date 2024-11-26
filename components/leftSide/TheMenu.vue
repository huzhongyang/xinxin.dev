<script setup lang="ts">
import { type Menu, menuRouter, type MenusPath } from '~/types'

const route = useRoute()
const curPath = ref<MenusPath>(route.path as MenusPath)

function menuClicked(menu: Menu) {
  curPath.value = menu.path as MenusPath
}

function matchMenuPath(path: string, menuPath: string) {
  if (menuPath === '/' && path === menuPath) {
    return true
  }
  else if (menuPath !== '/') {
    return path.startsWith(menuPath)
  }
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
    :class="[matchMenuPath(curPath, menu.path) ? 'cur-path' : 'hover:menu-hover-bg']"
    @click="menuClicked(menu)"
  >
    <div h-4 w-4 :class="[menu.icon, matchMenuPath(curPath, menu.path) ? 'bg-white' : '']" />
    <span>{{ menu.name }}</span>
  </nuxt-link>
</template>
