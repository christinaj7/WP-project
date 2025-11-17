/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'ticker': 'ticker 18s linear infinite',
      },
      keyframes: {
        ticker: {
          'to': { transform: 'translateX(-100%)' }
        }
      },
      gridTemplateAreas: {
        'category': `
          "t1 t1 t2 t2 t3 t3"
          "t1 t1 t2 t2 t4 t4"
          "t5 t5 t2 t2 t4 t4"
        `,
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
