// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // 给所有scss文件注入一段代码
          additionalData: `@import '~/assets/css/variables.scss';`
        }
      }
    }
  },
  modules: ["@element-plus/nuxt", "nuxt-swiper"]
})
