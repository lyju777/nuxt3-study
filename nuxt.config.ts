// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  modules: [
    "nuxt-quasar-ui",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],
  quasar: {
    plugins: ["Notify"],
    config: {
      notify: {
        position: "top-right",
      },
    },
  },

  imports: {
    presets: [
      {
        from: "vue-i18n",
        imports: ["useI18n"],
      },
    ],
  },
  ssr: true,
  app: {
    head: {
      title: "Nuxt 3",
      meta: [{ name: "description", content: "Nuxt 3 강의 입니다." }],
    },
  },
});
