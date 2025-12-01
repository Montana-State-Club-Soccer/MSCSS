/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#081f57',
          hover: '#071c4e',
          active: '#071a4a',
          tint20: '#394c79',
          tint30: '#526289',
          tint70: '#b5bccd',
          shade10: '#071c4e',
          shade20: '#061946',
          shade30: '#06163d',
          shade70: '#02091a',
        },
        secondary: {
          DEFAULT: '#bc955c',
          hover: '#a98653',
          active: '#a07f4e',
          tint10: '#c3a06c',
          tint20: '#c9aa7d',
          tint30: '#d0b58d',
          shade20: '#96774a',
          shade30: '#846840',
          shade70: '#382d1c',
        },
      },
    },
  },
  plugins: [],
}
