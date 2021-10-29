<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
const router = useRouter();
const pageIndexs = {
  index: 1,
  'about-me': 2,
  books: 3,
  blog: 4,
  contact: 5,
};
router.beforeEach((to, from, next) => {
  if (pageIndexs[from.name] < pageIndexs[to.name]) {
    to.meta.animationDir = 'slide-left';
  } else {
    to.meta.animationDir = 'slide-right';
  }

  next();
});
</script>
