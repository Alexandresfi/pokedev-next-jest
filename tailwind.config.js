/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'icon-input-checkouted': 'url("/icon-input-checkouted.svg")'
      },
      colors: {
        primary: '#DC0A2D',
        normal: '#aaa67f',
        fighting: '#c12239',
        flying: '#a891ec',
        ground: '#dec16b',
        poison: '#a43e9e',
        rock: '#b69e31',
        bug: '#a7b723',
        ghost: '#70559b',
        steel: '#b7b9d0',
        fire: '#f57d31',
        water: '#6493eb',
        grass: '#74cb48',
        electric: '#f9cf30',
        psychic: '#fb5584',
        ice: '#9ad6df',
        dragon: '#7037ff',
        dark: '#75574c',
        fairy: '#e69eac',
        grayscale: '#666666',
        blackdarck: '#1D1D1D',
        bordercolor: '#E0E0E0'
      }
    },
    fontSize: {
      100: ['8px', '12px'],
      200: ['10px', '16px'],
      300: ['14px', '16px']
    }
  },
  plugins: []
};
