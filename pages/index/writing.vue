<script setup lang="ts">
import PostList from '~/components/writing/PostList.vue'
</script>

<template>
  <div grid="~ cols-[300px_1fr] rows-1" h-screen w-full>
    <!-- post menus -->
    <div b-r p2 bg-base>
      <PostList />
    </div>

    <!-- post content -->
    <div>
      <nuxt-page />
    </div>
  </div>
</template>
