<template>
  <div class="container">
    <div class="row py-5">
      <div
        class="
          md:col-6
          order-1
          md:order-0
          text-center
          md:text-left md:mt-4
          xl:mt-6
        "
      >
        <p class="f-alegreya f-28px md:f-35px xl:f-50px">Hello!</p>
        <h1 class="f-alegreya my-0 f-44px md:f-6xl xl:f-7xl xl:my-4">
          I am L.D. Boston
        </h1>
        <p class="f-19 md:f-28px xl:f-32px">
          A novelist during daytime and
          <br />and a blogger at night.
        </p>
        <p class="f-16 md:f-20px xl:f-26px xl:pt-4">
          my life is dedicated to creating impactful stories and helping people
          making ones of their own.
        </p>
        <NuxtLink
          class="
            btn btn-primary
            f-16px
            md:f-20px
            xl:f-24px xl:py-4 xl:px-7
            md:mt-3
            xl:mt-4
          "
          to="/about-me"
        >
          Learn more
        </NuxtLink>
      </div>
      <div class="md:col-6 text-right xl:text-center order-0 md:order-1">
        <img src="/img/main.png" class="main-img" alt="lokman main picture" />
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
  width: 75%;
  @media screen and (max-width: $xl) {
    width: 80%;
  }
  @media screen and (max-width: $md) {
    width: unset;
  }
}
</style>
