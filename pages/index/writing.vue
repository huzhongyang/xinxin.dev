<script setup lang="ts">
import PostList from '~/components/writing/PostList.vue'
</script>

<template>
  <div grid="~ cols-[300px_1fr] rows-1" h-screen w-full>
    <!-- post menus -->
    <div p2 b-r overflow-auto bg-base>
      <PostList />
    </div>

    <!-- post content -->
    <div p2 overflow-auto>
      <nuxt-page />
    </div>
  </div>
</template>
