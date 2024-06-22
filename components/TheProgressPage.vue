<script setup lang="ts">
useIpadCursor()
</script>

<template>
  <div class="w-screen flex flex-col select-none items-center justify-center gap-4 h-lvh">
    <div class="text-5xl font-700" flex="~ row items-center justify-center gap-1">
      <nuxt-img
        data-cursor="block"
        data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 1.4s"
        src="/images/avatar.png" alt="avatar"
        class="avatar drag-none h-3rem rounded-full"
      />
      <div>
        <span data-cursor="text" class="p-y-2 text-center">Hi, I'm&nbsp;</span>
        <span data-cursor="block" class="name-hover inline-block p-y-2">zy</span>
      </div>
    </div>

    <div>
      A Curious <code>&lt;dveloper /></code>
    </div>

    <div>
      I'm building this site
    </div>

    <div>
      <nuxt-link drag-none to="https://github.com/" target="_blank">
        <div class="i-carbon-logo-github h-8 w-8 transition-all duration-200 hover:scale-110 hover:opacity-80" />
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin hover-blur-keyframe($name, $from_blur, $to_blur) {
  @keyframes #{$name} {
    from {
      filter: blur($from_blur);
    }
    to {
      filter: blur($to_blur);
    }
  }
}

.avatar:hover {
  @include hover-blur-keyframe('avatar-hover', 10px, 0);
  animation: ease-out 0.3s avatar-hover;
}

.name-hover {
  position: relative;
  z-index: 1;
  &:hover {
    @include hover-blur-keyframe('name-hover', 2px, 0);
    animation: name-hover 0.5s ease-out;
  }

  &::after {
    padding: inherit;
    content: 'zy';
    display: inline-block;
    width: 0;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 11;
    background: -webkit-linear-gradient(0deg, #e81e57 0%, #910aff 80%, #af38ff);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.8s ease-out;
  }

  &:hover::after {
    width: 100%;
  }
}
</style>
