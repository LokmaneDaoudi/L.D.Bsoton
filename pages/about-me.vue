<template>
  <div class="container">
    <div class="row g-3 md:pt-6">
      <div class="md:col-6">
        <img src="/img/avatar.jpg" style="width: 100%" alt="" />
      </div>
      <div class="md:col-6 md:f-24px text">
        <p>
          I was born on June 2nd 1999. Before making my debut novel, I got my
          professional Bachelor's degree in mining engineering from the
          university of Badji-Moukhtar in my home town, Annaba.
        </p>
        <p>
          Like many authors, I started my storytelling journey since I was young
          by scribbling and illustrating. The first book I read was "The Pale
          Horse" by Agatha Christie which drove me to read more books and
          inspired me to write one myself.
        </p>
        <p>
          I stopped writing at some point, but that changed once I discovered
          "The Alchemist" by Paolo Coelho, which is I still consider my
          favourite because of the way it described the main character's
          journey. With my new understanding of storytelling, I started reading
          more about story structures and such, and that's how I regained my
          passion for writing.
        </p>
        <p>
          I write fiction, specifically thrillers, and I also like writing
          articles to help others and share my experiences. When I'm not writing
          or reading, I'm either creating designs, playing video games, or
          hanging out with my friends.
        </p>
      </div>
    </div>
    <div class="who f-alegreya f-bold op-60 text-vertical-down">WHO AM I?</div>
  </div>
</template>

<style lang="scss" scoped>
.who {
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  font-size: 85px;

  clip-path: inset(0 0 100% 0);
  animation: grow 0.5s 0.5s ease-in-out forwards;
  @keyframes grow {
    to {
      clip-path: inset(0 0 0 0);
    }
  }
}

.text {
  max-width: 720px;
  > p {
    line-height: 31px;
    margin: 0;
    &:not(:last-child) {
      margin-bottom: 31px;
    }
  }
}
</style>

<style lang="scss">
body::before {
  content: '';
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 0;
  height: 100vh;
  background-color: var(--grey);

  transition: width 0.5s ease-in-out;
}
.about-me::before {
  width: 50%;
}
</style>

<script lang="ts" setup>
const route = useRoute();

useMeta({
  bodyAttrs: {
    class: `about-me ${route.meta?.animationDir ?? ''}`,
  },
});
</script>
