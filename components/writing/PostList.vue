<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const curPostId = ref('')

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const allPosts = computed(() => {
  const posts: NavItem[] = []
  if (!navigation.value)
    navigation!.value = []
  for (let i = 0; i < navigation.value.length; i++) {
    if (navigation.value[i].children) {
      navigation!.value.push(...navigation.value[i].children!)
    }
    else {
      posts.push(navigation.value[i])
    }
  }
  return posts
})

function postClick(e: Event, item: NavItem) {
  e.preventDefault()
  curPostId.value = item._id!
}
</script>

<template>
  <client-only>
    <div
      v-for="item in allPosts" :key="item._path"
      flex="~ col items-start gap-2"
      @click="postClick($event, item)"
    >
      <nuxt-link :to="item._path">
        {{ item.title }}
      </nuxt-link>
    </div>
  </client-only>
</template>
