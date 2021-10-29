<template>
  <Header />
  <main v-bind="$attrs">
    <transition name="slide">
      <div>
        <slot />
      </div>
    </transition>
  </main>
  <footer></footer>
</template>

<script lang="ts" setup></script>
