// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/apollo'
  ],
  ssr: false,
  pinia: {
    storesDirs: ['./stores/**'],
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:4000/api/graphql',
      }
    },
  },
  css: ["~/assets/app.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  devtools: { enabled: true }
});