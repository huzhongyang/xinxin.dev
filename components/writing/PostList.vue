<script lang="ts" setup>
const route = useRoute()
const curPostPath = ref(route.path)

const { data: allPosts } = await useAsyncData('blogs', () => queryCollection('blogs').all())
function postClick(path: string) {
  curPostPath.value = path
}
</script>

<template>
  <div
    flex="~ col items-start gap-2"
  >
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
</template>
