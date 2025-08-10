<script lang="ts" setup>
const route = useRoute()
const curPostPath = ref(route.path)

const { data: allPosts } = await useFetch('/api/getAllPosts')

function postClick(path: string) {
  curPostPath.value = path
}

function rssClick() {
  window.open('/rss.xml', '_blank')
}
</script>

<template>
  <div
    flex="~ col items-start h-full" b-r
  >
    <!-- RSS button -->
    <div flex="~ row items-center justify-between gap-2" px-15px py-10px b-b-1 w-full>
      <span text="xl" font-bold>Writing</span>
      <button
        text="sm" border="~ gray/20 rounded-lg" p-4px flex gap-1 cursor-pointer items-center
        @click="rssClick"
      >
        <span i-fe-feed />
        <span>RSS feed</span>
      </button>
    </div>

    <div p-2 w-full overflow-auto>
      <nuxt-link
        v-for="item in allPosts" :key="item.id"
        :to="item.path" w-full

        @click="postClick(item.path)"
      >
        <div
          :class="[curPostPath === item.path ? 'menu-hover-bg' : '', item.created ? 'gap-1' : '']"
          class="p-2 hover:menu-hover-bg"
          flex="~ col items-start" rounded-2xl duration-400
        >
          <span class="text-lg font-bold">{{ item.title }}</span>
          <span class="text-sm text-gray/80">{{ item.created }} </span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
