/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "custom-red": "hsl(1, 90%, 64%)",
        "custom-blue": "hsl(219, 85%, 26%)",
        "custom-white": "hsl(0, 0%, 100%)",
        "custom-very-light-grayish-blue": "hsl(210, 60%, 98%)",
        "custom-light-grayish-blue-1": "hsl(211, 68%, 94%)",
        "custom-light-grayish-blue-2": "hsl(205, 33%, 90%)",
        "custom-grayish-blue": "hsl(219, 14%, 63%)",
        "custom-dark-grayish-blue": "hsl(219, 12%, 42%)",
        "custom-very-dark-blue": "hsl(224, 21%, 14%)"
      },
      fontFamily: {
        "custom-jakarta" : "'Plus Jakarta Sans', sans-serif"
      }
    },
  },
  plugins: [],
}
