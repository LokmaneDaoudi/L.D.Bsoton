import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/styles/primeflex/_variables.scss";',
        },
      },
    },
  },
});
