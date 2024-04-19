// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@vueuse/nuxt",
    '@vueuse/motion/nuxt',
    "@element-plus/nuxt",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    '@pinia-plugin-persistedstate/nuxt'
  ]
})