export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8080,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'OLAMIDE ADEYI | Product Designer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'OLAMIDE is a certified Product Designer with over 2 years of experience in the design Industry. He has expertise and experience in UI/UX Designing.' },
      { hid: 'keywords', name: 'keywords', content: 'Design Industry, Product Designer, Certified Product Designer, UI UX Designer, Portfolio Website, My Portfolio, Product Designer Portfolio, Web Portfolio, UI UX Portfolio, UI Portfolio, UX Portfolio, Portfolio Design, Experience Portfolio, Workfolio, Job Experience, Olamide Adeyi, Olamide, Adeyi' },

      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'OLAMIDE ADEYI | Product Designer' },
      { hid: 'og:url', name: 'og:url', content: "https://olamideadeyi.com" },
      { hid: 'og:site_name', name: 'og:site_name', content: "OLAMIDE ADEYI | Product Designer" },
      { hid: 'og:image', name: 'og:image', content: "https://res.cloudinary.com/eazzie/image/upload/f_webp,q_auto/Olamide/Olamide-facing-down_rpxpq5.png" },
      { hid: 'og:description', name: 'og:description', content: "OLAMIDE is a certified Product Designer with over 2 years of experience in the design Industry. He has expertise and experience in UI/UX Designing." },

      { hid: 'twitter:site', name: 'twitter:site', content: "@Legacy_U_I" },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Adeyi Olamide' },
      { hid: 'twitter:card', name: 'twitter:card', content: "summary_large_image" },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: "An image of the Olamide" },
      { hid: 'twitter:image', name: 'twitter:image', content: "https://res.cloudinary.com/eazzie/image/upload/f_webp,q_auto/Olamide/Olamide-facing-down_rpxpq5.png" },
      { hid: 'twitter:description', name: 'twitter:description', content: "OLAMIDE is a certified Product Designer with over 2 years of experience in the design Industry. He has expertise and experience in UI/UX Designing." },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/tailwind/tailwind.css',
    '@/assets/scss/cursor.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/client.js",
      mode: "client"
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxt/postcss8',
    '@nuxt/image',
  ],

  googleFonts: {
    preload: true,
    display: 'swap',
    families: {
      Lato: [400],
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/robots'
  ],

  robots: {
    UserAgent: '*',
    Disallow: ''
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/eazzie/image/upload/Olamide/'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
