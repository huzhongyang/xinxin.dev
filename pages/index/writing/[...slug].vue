<script lang="ts" setup>
import TableOfContents from '~/components/writing/TableOfContens.vue'

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blogs').path(route.path).first()
})

const showTableOfContents = computed(() => {
  const tocLinks = page.value?.body.toc?.links
  return tocLinks && tocLinks.length > 0
})

const postContainerRef = useTemplateRef<HTMLSelectElement>('postContainerRef')
const titles = shallowRef<HTMLHeadingElement[]>()

onMounted(async () => {
  await sleep(500)
  const h2s = postContainerRef.value!.querySelectorAll('h2')
  const h3s = postContainerRef.value!.querySelectorAll('h3')
  console.log(h2s)
  titles.value = [...h2s, ...h3s]
  console.log(titles.value)
})
</script>

<template>
  <section v-if="page" ref="postContainerRef">
    <client-only>
      <ContentRenderer :value="page" />
      <TableOfContents
        v-if="showTableOfContents" :toc="page.body.toc" :titles="titles"
        pos="fixed top-1/2 right-0"
        transform="translate-y--1/2 translate-x--1/2"
        text="gray-500 text-sm"
        opacity-80
      />
    </client-only>
  </section>
</template>
