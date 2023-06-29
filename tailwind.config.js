/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#181818",
        "purple": "#8758FF",
        "green": "#00cec9",
        "gray-new": "#F2F2F2",
        "soft-dark": "#1e1e1e"
      },
      typography: ({ theme }) => ({
        default: {
          css: {
            color: theme("colors.gray.100"),
            a: {
              color: theme("colors.blue.700"),
              "&:hover": {
                color: theme("colors.blue.700"),
              },
            },

            p: {
              color: theme("colors.gray.300"),
            },

            hr: {
              borderColor: theme("colors.gray.300"),
            },

            h1: {
              color: theme("colors.gray.300"),
            },
            h2: {
              color: theme("colors.gray.300"),
            },
            h3: {
              color: theme("colors.gray.300"),
            },
            h4: {
              color: theme("colors.gray.300"),
            },
            h5: {
              color: theme("colors.gray.300"),
            },
            h6: {
              color: theme("colors.gray.300"),
            },

            strong: {
              color: theme("colors.gray.100"),
            },

            code: {
              color: theme("colors.gray.300"),
            },

            blockquote: {
              color: theme("colors.gray.300"),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
