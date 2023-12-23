/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      // Define dark mode styles
      dark: {
        backgroundColor: '#1a202c',
        textColor: '#ffffff',
        // Add any other dark mode styles you need
      },
      darkMode: 'class',
    },
  },
  plugins: [
    require('flowbite/plugin'),
    // Add any other Tailwind CSS plugins you need
  ],
};
