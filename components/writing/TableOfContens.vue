<script setup lang="ts">
import type { Toc } from '@nuxt/content'

const props = defineProps<{
  toc: Toc | undefined
  postContainer: HTMLElement | null
}>()

const observedHeadings = ref<HTMLHeadingElement[]>()
const currentTitleId = ref<string | null>(null)

const ob = new IntersectionObserver(
  (entries, _) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      currentTitleId.value = entry.target.id
    })
  },
  {
    root: null,
    rootMargin: '0px 0px -90%',
    threshold: 0,
  },
)

onMounted(async () => {
  await sleep(500)
  if (!props.postContainer) return
  const headings = props.postContainer.querySelectorAll('h2[id], h3[id]')
  observedHeadings.value = Array.from(headings) as HTMLHeadingElement[]
  observedHeadings.value.forEach((heading) => {
    ob.observe(heading)
  })
})

onBeforeUnmount(() => {
  ob.disconnect()
})
</script>

<template>
  <div>
    <ul>
      <li v-for="item in props.toc?.links" :key="item.id" text="12px #8e8787">
        <a :href="`#${item.id}`" flex="~ items-center gap-2">
          <div
            :class="[currentTitleId === item.id ? 'bg-[#373737]' : 'bg-[#8e8787]']"
            rounded-20px h-4px w-16px inline-block duration-800
          />
          <span
            class="hover:opacity-[1]" duration-800
            :class="[currentTitleId === item.id ? 'opacity-[1]' : 'opacity-[0]']"
          >
            {{ item.text }}
          </span>
        </a>
        <ul v-if="item.children">
          <li v-for="child in item.children" :key="child.id">
            <a :href="`#${child.id}`" flex="~ items-center gap-2">
              <div
                :class="[currentTitleId === child.id ? 'bg-[#373737]' : 'bg-[#8e8787]']"
                mr-10px rounded-20px h-4px w-10px inline-block duration-800
              />
              <span
                duration-800 :class="[currentTitleId === child.id ? 'opacity-[1]' : 'opacity-[0]']"
                class="hover:opacity-[1]"
              >
                {{ child.text }}
              </span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
