<template>
  <div class="container">
    <div class="row py-5">
      <div
        class="md:col-6 order-1 md:order-0 text-center md:text-left md:text-start align-self-center"
      >
        <p class="f-alegreya f-28px md:f-61px">Hello!</p>
        <h1 class="f-alegreya f-44px md:f-8xl md:my-4">I am L.D. Boston</h1>
        <p class="f-19 md:f-44px">
          A novelist during daytime and
          <br />and a blogger at night.
        </p>
        <p class="f-16 md:f-33px md:pt-4">
          my life is dedicated to creating impactful stories and helping people
          making ones of their own.
        </p>
        <NuxtLink class="btn btn-primary f-16 md:f-27 md:mt-3" to="/about-me">Learn more</NuxtLink>
      </div>
      <div class="md:col-6 text-right order-0 md:order-1">
        <img src="/img/main.png" class="main-img px-3 md:p-0" alt="lokman main picture" />
      </div>
    </div>
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

<style lang="scss" scoped>
.main-img {
  max-width: 100%;
}
</style>