// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr:false,
    app: {
        head: {
          meta: [
            // <meta name="viewport" content="width=device-width, initial-scale=1">
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ],
          script: [
            // <script src="https://myawesome-lib.js"></script>
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js' }
          ],
          noscript: [
            // <noscript>Javascript is required</noscript>
            { children: 'Javascript is required' }
          ]
        }
      },
css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})
