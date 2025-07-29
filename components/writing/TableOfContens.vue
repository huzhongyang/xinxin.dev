<script setup lang="ts">
import type { Toc } from '@nuxtjs/mdc'

const props = defineProps<{ toc: Toc | undefined }>()

const ob = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      const link = document.querySelector(`a[href="#${entry.target.id}"]`)
      console.log(link)
    })
  },
  { rootMargin: '-50% 0px -50% 0px' },
)

onMounted(() => {
  // observe h2
  const h2s = document.querySelectorAll('h2[id]')
  h2s.forEach((h2) => {
    ob.observe(h2)
  })
})
</script>

<template>
  <div>
    <ul>
      <li v-for="item in props.toc?.links" :key="item.id" text="12px #8e8787">
        <a :href="`#${item.id}`" flex="~ items-center gap-2">
          <div class="bg-[#8e8787]" rounded-20px h-4px w-16px inline-block />
          <span>{{ item.text }}</span>
        </a>
        <ul v-if="item.children">
          <li v-for="child in item.children" :key="child.id">
            <a :href="`#${child.id}`" flex="~ items-center gap-2">
              <div class="bg-[#8e8787]" mr-10px rounded-20px h-4px w-10px inline-block />
              <span>{{ child.text }}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
