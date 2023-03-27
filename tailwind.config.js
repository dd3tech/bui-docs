/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './public/**/*.{vue,js,ts,jsx,tsx}', './docs/**/*.{vue,js,ts,jsx,tsx}'],
    purge: {
        content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './public/**/*.{vue,js,ts,jsx,tsx}', './docs/**/*.{vue,js,ts,jsx,tsx}']
    },
    theme: {
        variants: {
            extend: {
                backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
                opacity: ['responsive', 'hover', 'focus', 'active', 'disabled'],
                cursor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
                translate: ['group-hover'],
                scale: ['group-hover']
            }
        },
        extend: {
            maxWidth: {
                '8xl': '1400px',
                '9xl': '1600px',
                '10xl': '1760px'
            }
        },
        plugins: []
    }
}
