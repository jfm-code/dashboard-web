// tailwind.config.js
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',  // For components and pages inside the src/app folder
    './src/components/**/*.{js,ts,jsx,tsx}',  // For reusable components
    './src/styles/**/*.{css}',  // If you have global styles here
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
