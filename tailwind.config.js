/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#F4F6FB',
        'navy': '#04102B',
        'brand-blue': '#0047FF',
        'soft-blue': '#7FA3FF',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.06em',
        'tighter-xl': '-0.05em',
        'tighter-lg': '-0.04em',
        'tighter-md': '-0.03em',
        'tighter-sm': '-0.01em',
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '1' }],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
