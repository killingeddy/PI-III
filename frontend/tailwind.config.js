/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dorange: '#ff6b35',
        lorange: '#f7c59f',
        neutral: '#efefd0',
        dblue: '#004e89',
        lblue: '#1a659e',
      },
      backgroundImage: {
        'grainy': 'url(https://grainy-gradients.vercel.app/noise.svg)'
      },
    },
    fontFamily: {
      'title': ['Title'],
      'body': ['Body'],
      'body-bold': ['BodyBold'],
      'body-thin': ['BodyThin'],
    },
    borderWidth: {
      '10': '60px',
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
