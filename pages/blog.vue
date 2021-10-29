<template>
  <div class="container mt-8 text-center">
    <h1>Coming Soon</h1>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

useMeta({
  bodyAttrs: {
    class: route.meta?.animationDir,
  },
});
</script>
