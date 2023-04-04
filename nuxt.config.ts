import transformerDirectives from "@unocss/transformer-directives";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    [
      "@unocss/nuxt",
      {
        uno: true, // enabled `@unocss/preset-uno`
        icons: true, // enabled `@unocss/preset-icons`
        attributify: true, // enabled `@unocss/preset-attributify`,
        wind: true,

        transformers: [transformerDirectives()],
      },
    ],
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Noto+Sans+SC": true,
        },
      },
    ],
  ],
});
