module.exports = {
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.{html,css,js}",
      options: {
        // ここにHTML, CSS, JS用のオプションを設定できます
      },
    },
  ],
};