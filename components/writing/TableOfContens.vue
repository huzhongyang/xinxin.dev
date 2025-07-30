<script setup lang="ts">
import type { Toc } from '@nuxt/content'

const props = defineProps<{ toc: Toc | undefined }>()
// let ob: IntersectionObserver
// if (import.meta.client) {
//   ob = new IntersectionObserver(
//     (entries, observer) => {
//       entries.forEach((entry) => {
//         console.log(entry)
//       })
//     },
//     {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.1,
//     },
//   )
// }

onMounted(async () => {
  await sleep(1000)
  console.log(1111)
  // observe h2
  const h2s = document.getElementsby('h2[id]')
  console.log(h2s)
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
