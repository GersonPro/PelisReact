/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/tailwind.css',
    './src/**/*.{js,ts,css}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        slate: {
          '900': '#0f172a', // Reemplaza 'xxxxxx' con el valor hexadecimal del color que deseas utilizar
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], // Agrega 'dark' para habilitar las variantes de clases para el modo oscuro
    },
  },
  plugins: [],
}
