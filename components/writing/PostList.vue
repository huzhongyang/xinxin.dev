<script setup lang="ts">
import type { PostNavItem } from '~/types'

const curPostId = ref('')

const contentQuery = queryContent('writing')
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(contentQuery))

const allPosts = computed(() => {
  const posts: PostNavItem[] = []
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

function postClick(id: string) {
  curPostId.value = id
}
</script>

<template>
  <client-only>
    <div
      flex="~ col items-start gap-2"
    >
      <nuxt-link
        v-for="item in allPosts" :key="item._path"
        :to="item._path" w-full
        @click="postClick(item._path)"
      >
        <div
          :class="[curPostId === item._path ? 'menu-hover-bg' : '']"
          class="p-2 hover:menu-hover-bg"
          flex="~ col items-start gap-1" rounded-2xl duration-400
        >
          <span class="text-lg font-bold">{{ item.title }}</span>
          <span class="text-sm text-gray/80">{{ item.created }} </span>
        </div>
      </nuxt-link>
    </div>
  </client-only>
</template>
