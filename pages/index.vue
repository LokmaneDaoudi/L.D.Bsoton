<template>
  <div class="container">
    <div class="row md:pt-2">
      <div class="md:col-6 align-self-center">
        <p class="f-alegreya md:f-61px">Hello!</p>
        <h1 class="f-alegreya md:f-8xl md:my-4">I am L.D. Boston</h1>
        <p class="md:f-44px">
          A novelist during daytime and <br />
          and a blogger at night.
        </p>
        <p class="md:f-33px md:pt-4">
          my life is dedicated to creating impactful stories and helping people
          making ones of their own.
        </p>
        <NuxtLink class="btn btn-primary md:mt-3" to="/about-me">
          Learn more
        </NuxtLink>
      </div>
      <div class="col-6 text-right">
        <img src="/img/main.png" alt="" />
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
