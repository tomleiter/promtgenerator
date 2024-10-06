// https://nuxt.com/docs/api/configuration/nuxt-config






export default defineNuxtConfig({

    target: 'server', // default is 'server', 
    ssr:true,

    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
            api_url: ''
        }
    },
    imports: {
        dirs: ['store'],
    },
    image: {
        providers: {
            wordpress: '~/providers/wordpress.ts',
          },
           defaultProvider: 'wordpress',
    },
    router: {
      },

    
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            htmlAttrs: {
                lang: 'de'
            },
            charset: 'utf-8',
           // viewport: 'width=500, initial-scale=1',
            title: 'Prompt Generator,  Midjourney, Stable Diffusion und Adobe Firefly',
            meta: [
                 { name: 'description', content: 'Der Prompt Generator ist ein Tool, das speziell entwickelt wurde, um Benutzer bei der Erstellung detaillierter Prompts für KI-gestützte Text-zu-Bild-Modelle wie Midjourney, Stable Diffusion und Adobe Firefly (soweit möglich) zu unterstützen. Nutzer können kreative Beschreibungen eingeben, Parameter wie Seitenverhältnis, Stil und Ausschlussbegriffe anpassen und Prompts einfach generieren.' },
                 { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                 { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'icon', type:'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', type:'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'manifest', href: '/site.webmanifest' },
                { rel: 'mask-icon',type:'image/png', href: '/safari-pinned-tab.svg',color:'#f8ef6e' },
                { name: 'og:image', content: 'share.jpg?v=12'},
                { name: 'msapplication-TileColor', content: '#f8ef6e' },
                { name: 'theme-color', content: '#f8ef6e' },
                { name: 'google-site-verification', content: '' },
                { name: 'geo.region', content: 'AT-7' },
                { name: 'geo.placename', content: 'Innsbruck' },
                { name: 'geo.position', content: '47.25942818953577;11.392061348350971' },
                { name: 'ICBM', content: '47.25942818953577;11.392061348350971' },
                { name: 'DC.title', content: 'Prompt Generator,  Midjourney, Stable Diffusion und Adobe Firefly' },
         
/*
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e83b3c">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="theme-color" content="#ffffff">
                 */
            ],
        }
    }
    ,
    build: {

    },
    corePlugins: {
        fontSize: false,
        // ...
    },

    plugins: [

    ],

    modules: [
        '@nuxtjs/tailwindcss',
    ],
    // Defaults options
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: true,
    }
    ,
    css: [
        "~/assets/css/fonts.css",
    ],
    nitro: {
        prerender: {
            autoSubfolderIndex: true,
            failOnError: false,
        }
    },
    devtools: {
      enabled: true,

      timeline: {
        enabled: true
      }
    },
      experimental: {
        renderJsonPayloads: true,
      },
    hooks: {
        async 'nitro:config'(nitroConfig) {
        
             
        }
    }
})