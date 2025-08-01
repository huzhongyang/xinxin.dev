<script setup lang="ts">
import PostList from '~/components/writing/PostList.vue'
</script>

<template>
  <div grid="~ cols-[300px_1fr] rows-1" h-screen w-full>
    <!-- post menus -->
    <PostList />

    <!-- post content -->
    <div class="p-[96px_32px_64px]" overflow-auto>
      <article class="p-[0_88px]">
        <nuxt-page />
      </article>
    </div>
  </div>
</template>
