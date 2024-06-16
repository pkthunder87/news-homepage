/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Inter',
    },
    screens: {
      sm: '425px',
      md: '750px',
      lg: '1024px',
      xl: '1280px',
      xl2: '1440px',
    },
    extend: {
      colors: {
        'primary-soft-orange': 'hsl(35, 77%, 62%)',
        'primary-soft-red': 'hsl(5, 85%, 63%)',
        'neutral-off-white': 'hsl(36, 100%, 99%)',
        'neutral-grayish-blue': 'hsl(233, 8%, 79%)',
        'neutral-dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'neutral-very-dark-blue': 'hsl(240, 100%, 5%)',
      },
    },
  },
  plugins: [],
};
