module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(90deg, rgba(200, 231, 233, 1) 4%, rgba(255, 0, 0, 1) 92%, rgba(226, 226, 232, 1) 100%)`,
      }),
      spacing: {
        '100': '448px',
        '108': '560px',
        '112': '700px',
      },
      colors: {
        'blue': '#5B49FE',
        'gray': '#ced4da',
      },
    },
  },
  plugins: [],
}
