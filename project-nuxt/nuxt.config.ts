// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@hebilicious/vue-query-nuxt",
  ],
  shadcn: {
    prefix: "", // Optional: prefix for components

    componentDir: "./components/ui", // Optional: directory for components
  },
});
