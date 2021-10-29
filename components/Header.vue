<script lang="ts" setup></script>

<template>
  <header>
    <div class="container p-4 md:p-0 md:py-4 flex align-items-center">
      <div class="f-alegreya f-medium f-24px md:f-42px">L.D. Boston</div>
      <nav class="ml-auto nav-links" :class="{ show: sidebarShown }">
        <div class="mobile-nav head">
          <span>L.D. Boston</span>
          <button class="ml-auto" @click="toggleSidebar">&times;</button>
        </div>

        <div class="links">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about-me">About me</NuxtLink>
          <NuxtLink to="/books">Books</NuxtLink>
          <!-- <NuxtLink to="/blog">Blog</NuxtLink> -->
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>

        <div class="mobile-nav social">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about-me">About me</NuxtLink>
          <NuxtLink to="/books">Books</NuxtLink>
        </div>
      </nav>
      <button class="mobile-nav toggle ml-auto" @click="toggleSidebar">&times;</button>
    </div>
  </header>
</template>

<script lang="ts" setup>
let sidebarShown = ref(false);
let toggleSidebar = () => sidebarShown.value = !sidebarShown.value;
</script>

<style lang="scss" scoped>
.nav-links .links > a {
  padding: 0.6rem 1rem;
  color: var(--white);
  font-size: 25px;
}

.mobile-nav {
  display: none;
}
@media screen and (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 70vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--grey);
    padding: 32px;

    transition: transform 0.3s ease-in-out;
    transform: translateX(-100%);
    &.show {
      transform: translateX(0);
    }
  }

  .nav-links .links {
    display: flex;
    flex-direction: column;
    > a {
      padding: 1.5rem 0;
      font-size: 32px;
    }
  }

  .mobile-nav.head {
    display: flex;
  }
  .mobile-nav.social {
    display: flex;
    justify-content: center;
  }
  .mobile-nav.toggle {
    display: inline-block;
  }
}
</style>
