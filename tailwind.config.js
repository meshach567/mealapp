/** @type {import('tailwindcss').Config} */
  export default {

   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: true, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
      // eslint-disable-next-line no-undef
      require('@tailwindcss/forms'),
    ],
  }

