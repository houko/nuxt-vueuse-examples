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
    '@pinia-plugin-persistedstate/nuxt',
    "@nuxtjs/i18n",
    '@formkit/auto-animate',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    'nuxt-swiper',
    '@vee-validate/nuxt',
    'nuxt-icon'
  ],
  i18n: {
    compilation:{
      strictMessage: false,
      jit: true
    },
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.ts' },
      { code: 'zh', iso: 'zh-CN', file: 'zh-CN.ts' }
    ],
    defaultLocale: 'zh',
    langDir: 'locales/',
    lazy: true,
  }
})