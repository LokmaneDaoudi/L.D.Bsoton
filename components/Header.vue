<script lang="ts" setup></script>

<template>
  <header class="md:py-4">
    <div class="container flex align-items-center">
      <div class="f-alegreya f-medium f-42px">L.D. Boston</div>
      <nav class="ml-auto nav-links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about-me">About me</NuxtLink>
        <NuxtLink to="/books">Books</NuxtLink>
        <!-- <NuxtLink to="/blog">Blog</NuxtLink> -->
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.nav-links > a {
  padding: 0.6rem 1rem;
  color: var(--white);
  font-size: 25px;
}
</style>
