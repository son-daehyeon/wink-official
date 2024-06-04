/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['pretendard'],
        roboto: ['Roboto'],
      },
      textShadow: {
        border: '-1px -1px 0 #424f73, 1px -1px 0 #424f73, -1px 1px 0 #424f73, 1px 1px 0 #424f73',
      },
      keyframes: {
        updown: {
          from: { transform: 'translatey(0px)' },
          to: { transform: 'translatey(-20px)' },
        },
        'updown-shadow': {
          from: {
            width: '184px',
            '-webkit-filter': 'blur(6px)',
          },
          to: {
            width: '240px',
            '-webkit-filter': 'blur(10px)',
          },
        },
        rotate: {
          '0%': { transform: 'translate(-50%, 0) rotateZ(0deg)' },
          '50%': { transform: 'translate(-50%, -2%) rotateZ(180deg)' },
          '100%': { transform: 'translate(-50%, 0%) rotateZ(360deg)' },
        },
      },
      animation: {
        updown: 'updown 1.4s infinite ease-in-out alternate',
        'updown-shadow': 'updown-shadow 1.4s infinite ease-in-out alternate',
        rotate: 'rotate 15s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-border': {
          textShadow:
            '-1px -1px 0 #424f73, 1px -1px 0 #424f73, -1px 1px 0 #424f73, 1px 1px 0 #424f73',
        },
      });
    },
  ],
};
