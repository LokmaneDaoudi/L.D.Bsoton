import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/primeflex/_variables.scss";
            @import "@/assets/styles/primeflex/_functions.scss";
            @import "@/assets/styles/primeflex/_mixins.scss";
          `,
        },
      },
    },
  },
  meta: {
    title: 'L.D. Boston',
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
});
