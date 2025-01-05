/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}" ,"./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      screens:{
        '2md':'960px'
      },
      colors:{
        primary:'#7E3AF2',
        secondarytext:'#6B7280',
        maintext:'#111928',
        borderc:'#E5E7EB'
      },
      fontFamily:{
        Inter:['Inter','Sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),

  ],
}