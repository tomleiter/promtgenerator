const colors = require("tailwindcss/colors");

module.exports = {
    corePlugins: {
        fontSize: false,
        // ...
    },


    important: true,
    content: [
        "./components/**/*.{vue,js}",
        "./layouts/**/*.vue",
        "./**/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    //darkMode: "class",
    plugins: [
        require('tailwindcss-fluid-type')({
            // your fluid type settings
            // works only with unitless numbers
            // This numbers are the defaults settings
            settings: {
                fontSizeMin: 1.125, // 1.125rem === 18px
                fontSizeMax: 1.25, // 1.25rem === 20px
                ratioMin: 1.125, // Multiplicator Min
                ratioMax: 1.2, // Multiplicator Max
                screenMin: 20, // 20rem === 320px
                screenMax: 96, // 96rem === 1536px
                unit: 'rem', // default is rem but it's also possible to use 'px'
                prefix: '', // set a prefix to use it alongside the default font sizes
                extendValues: true, // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
            },
            // Creates the text-xx classes
            // This are the default settings and analog to the tailwindcss defaults
            // Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
            values: {
                'xs': [-2, 1.6],
                'sm': [-1, 1.6],
                'base-small': [-0.8, 1.4],
                'base': [0, 1.6],
                'lg': [1, 1.6],
                'xl': [2, 1.2],
                '2xl': [3, 1.2],
                '3xl': [4, 1.2],
                '4xl': [5, 1.1],
                '5xl': [6, 1.1],
                '6xl': [7, 1.1],
                '7xl': [8, 1],
                '8xl': [9, 1],
                '9xl': [10, 1],
                '10xl': [12, 1],
                '95xl': [11, 1],
            },
        }),
    ],



    theme: {
        extend: {

            transitionProperty: {
                'height': 'height',
                'top': 'top',
                'bottom': 'bottom',
                'spacing': 'margin, padding',
                'background': 'background',
              },
            listStyleImage: {
                checkmark: 'url("~/assets/flag-secondary.svg")',
              },
              container: {

                },

            borderWidth: {
                '1' : '1px',
                '2' : '2px',
                '3' : '3px'
            },

            height: {
                '128': '32rem',
                '128xl': '34rem',
            },
            colors: {
                "primary": "#e5db8b",
                "hellblau":"#acafcf",
                "white":"#FFF",
                "black":"#000",
                "earth":"#f8ef6e",
                "secondary" : "#000", 
                "yellow" : "#f8ef6e", 
                "yellowdunkel" : "#e5db8b",
                "grey" : "#636466", 
                "verlauftop" : "", 
               
            },
            spacing: {
                200: '15rem',
                100: '7.5rem',
                50: '3.25rem',
            },
            screens: {
                'tall': { 'raw': '(min-height: 794px) and (max-height : 900px)' },
                // => @media (min-height: 800px) { ... }
                'sm': '640px',
                // => @media (min-width: 640px) { ... }

                'md': '768px',
                // => @media (min-width: 768px) { ... }

                'lg': '1025px',
                // => @media (min-width: 1024px) { ... }

                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },

            keyframes: {
                fadein: {
                    '0%': {
                        opacity: '0'
                    },


                    '100%': {
                        opacity: '1'
                    },
                },

                bounceslow: {
                    '0%,100%': {
                        transform: 'translateY(-25%)',
                        'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
                    },
                    '50%': {
                        transform: 'translateY(0)',
                        'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
                    },
                },


                navigationslide: {
                    '0%': {
                        opacit:0,
                        transform: 'translateY(-150%)'
                    },
                    '50%': {
                        transform: 'translateY(-100%)'
                    },
                    '100%': {
                        opacit:'1',
                        transform: 'translateY(0%)'
                    },
                },

                comein: {
                    '0%': {
                        opacity: '0',
                        transform: 'translate(0,-20%)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(0%,0)'
                    },
                },
                changecolor: {
                    '0%': {
                        color: '#b0c3cc',

                    },
                    '25%': {
                        color: '#5a3039',

                    },
                    '75%': {
                        color: '#9b8e3b',

                    },
                    '100%': {
                        color: '#b0c3cc',

                    },
                },

                slidein: {
                    '0%': {
                        transform: 'translate(1rem,1rem);',
                        opacity:'0',


                    },

                    '100%': {
                        transform: 'translate(-1rem,1rem);',
                        opacity:'1',
                    },
                },
 

                comein100: {
                    '0%': {
                        opacity: '0',
                        transform: 'translate(0%,100%)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(0%,0%)'
                    },
                },

                comeinZoom: {
                    '0%': {
                        opacity: '0',
                        transform: 'scale(1)'
                    },
                    '100%': {
                        opacity: '1',
                         transform: 'scale(1.3)'
                    },
                },
                evolate: {
                    '0%': {
                        opacity: '1',
                        transform: 'scale(1) rotate(0deg)'
                    },
                    '50%': {
                        opacity: '1',
                         transform: 'scale(1.5) rotate(-20deg)'
                    },
                    '100%': {
                        opacity: '1',
                         transform: 'scale(1.0) rotate(0deg)'
                    },
                },


                rotateimage: {
                    '0%,100%': {
                        transform: 'translateY(-2%) rotate(5deg)  scale(1)',
                   //     'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
                    },
                    '25%,75%': {
                        transform: 'translateY(0%)  rotate(-2.5deg) scale(1.05)',
                        //  'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
                    },

                    '50%': {
                        transform: 'translateY(0)  rotate(0deg) scale(1)',
                      //  'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
                    },
                },

            },
            animation: {
                fadein: 'fadein 2s ease-in-out',
                fadeinDelay: 'fadein 3s ease-in-out',
                fadeinfast: 'fadein 200ms linear',
                navigation: 'navigationslide 3s ease-in-out',
                comein: 'comein 1.5s ',
                comein100: 'comein100 .5s ',
                bounceslow : 'bounceslow 3s linear 2',
                changecolor : 'changecolor 20s linear infinite',
                rotateimage : 'rotateimage 15s linear infinite',
                slidein : 'slidein 0.3s ease-in-out 1',
                comeinZoom : 'comeinZoom 0.8s ease-in-out forwards',
                evolate : 'evolate 40s ease-in-out infinite',
            },


            container: {
                padding: {
       
                },
            },
            fontFamily: { // if you want extend 'katrarine-web', then just add them instead other originals.
                'sans': ['"Outfit", Times, sans-serif'],
                'display': ['"Outfit", sans-serif'],
                'light': ['"Outfit", sans-serif'],
                'bold': ['"Outfit", sans-serif'],
                'extrabold': ['"Outfit", sans-serif'],
                'medium': ['"Outfit", sans-serif'],
                'body': ['"Outfit", sans-serif'],
            },
        },
    },

    variants: {
        extend: {
            opacity: ["disabled"],
            translate: ['group-hover'],
            rotate: ['group-hover'],
            fluidType: ['responsive']
        },
    },


};
