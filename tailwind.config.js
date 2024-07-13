/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
      },
    },
  },
  plugins: [],
}

