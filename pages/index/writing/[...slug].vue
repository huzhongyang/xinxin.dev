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

const postContainerRef = useTemplateRef<HTMLElement>('postContainerRef')
</script>

<template>
  <section v-if="page" ref="postContainerRef">
    <client-only>
      <ContentRenderer :value="page" />
      <TableOfContents
        v-if="showTableOfContents" :toc="page.body.toc"
        :post-container="postContainerRef"
        pos="fixed top-1/2 right-0"
        transform="translate-y--1/2 translate-x--1/5"
        text="gray-500 text-sm"
        opacity-80 w-120px
      />
    </client-only>
  </section>
</template>
