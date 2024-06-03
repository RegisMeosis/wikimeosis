/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        'greencustom': '#8DC63F',
        'greencustom2': '#7DB234',
        'greencustom3': '#6EA027',
        'gris': '#666666',
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
        'slide-in': 'slideIn 2s ease-in-out',
        bounce: 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
  blocklist: ["container"],
  colors: {
    'green': '#8dc740',
    'green2': '#708952',
    'gris': '#666666',

  },
  fontFamily: {
    'body': ['"Roboto"'],
    'sf-new-republic': ['SF_New_Republic'],
    'sf-new-republic-bold': ['SF_New_Republic_Bold'],
    'sf-new-republic-italic': ['SF_New_Republic_Italic'],
    'sf-new-republic-bold-italic': ['SF_New_Republic_Bold_Italic'],
    'sf-new-republic-sample': ['SF_New_Republic_Sample'],
    'sf-new-republic-sc': ['SF_New_Republic_SC'],
    'sf-new-republic-sc-bold': ['SF_New_Republic_SC_Bold'],
    'sf-new-republic-sc-italic': ['SF_New_Republic_SC_Italic'],
    'sf-new-republic-sc-bold-italic': ['SF_New_Republic_SC_Bold_Italic'],
  },
}