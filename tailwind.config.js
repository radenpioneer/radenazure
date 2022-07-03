module.exports = {
  content: [
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: ['night'],
  },
}
