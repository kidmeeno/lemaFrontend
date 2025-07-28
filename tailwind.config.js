module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'gray-border': '#E9EAEB',
        'primary': '#535862',
        'secondary': '#7F56D9',
        'secondary-bg': '#F9F5FF',
      },
    },
  },
  plugins: [],
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
};
