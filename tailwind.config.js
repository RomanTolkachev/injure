/** @type {import('tailwindcss').Config} */
const { scrollbarGutter } = require('tailwind-scrollbar-utilities')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    fontFamily: {
      'Inter': ['inter', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        'my-main-blue': '#0658E0',
        'my-blue-light': '#0388ED',
        'my-blue-dark': '#054DD7',
        'my-gray': '#567B99',
        'my-gray-dark': '#1C3749',
        'my-violet': '#666eb3',
        'my-blackest': '#000000',
        'my-blacker': '#150E0B',
        'my-black': '#211C1C',
        'my-deep-gray': '#3D3D3D',
        'my-gray-medium': '#B7B7B7',
        'my-deep-light': '#C7C7C7',
        'my-white': '#F6F6F6',
      },
      fontSize: {
        base: ['15px', '19px'],
        '14px': ['14px', '18px'],
        '20px': ['20px', '26px'],
        '32px': ['clamp(1.563rem, 0.688rem + 4.667vw, 2rem)', 'clamp(1.875rem, 0.5rem + 7.333vw, 2.563rem)'],
        '12px': ['12px', '15px'],
        'hero-main': ['clamp(4rem, 0rem + 6.25vw, 5rem)', 'clamp(4.625rem, 0.625rem + 6.25vw, 5.625rem)'], // 64 строка 76 -  высота 80 строка 96
        'hero-main-small-mobile': ['clamp(2.625rem, -1.5rem + 18.333vw, 4rem)'],
        'hero-legend': ['clamp(1rem, 0.747rem + 0.941vw, 1.5rem)', 'clamp(1.25rem, 0.744rem + 1.882vw, 2.25rem)'],
        'header-nav': ['clamp(0.75rem, -0.25rem + 1.563vw, 1rem)', 'clamp(0.875rem, -0.375rem + 1.953vw, 1.188rem)'], // 12 to 16, 14 to 19
        'header-order': ['clamp(1.188rem, -0.063rem + 1.953vw, 1.5rem)', 'clamp(1.375rem, -0.125rem + 2.344vw, 1.75rem)'],
        'footer-phone': ['clamp(1.375rem, 0.063rem + 2.734vw, 2.25rem)', ]
      }
    },
  },
  plugins: [require('tailwind-scrollbar'), require('tailwind-scrollbar-hide'), scrollbarGutter()],
}

