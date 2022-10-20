/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', 'index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#15BE77',
        "primary-600": "#0f9a5f",
        "buttonMain": "#F9A84D1A"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'pattern': "url('./src/assets/pattern.png')",
        notification: "url('./src/assests/notificationPattern.png')"
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
