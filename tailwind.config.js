const colors = require("tailwindcss/colors")
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      main: "#0F3255",
      backgroundIntroduce1: "rgba(241, 249, 255, 1)",
      backgroundIntroduce2: "rgba(219, 227, 231, 1)",
      line: "#F6F6F6",
      lightGrey: "rgba(168, 168, 168, 1)",
      clay: "rgba(164, 202, 213, 1)",
      lightTint: "#F6F0ED",
      lightBlue: "#ECF5FF",
      heavyClay: "rgba(15, 50, 85, 1)",
      borderInput: "rgba(220, 220, 220, 1)",
      projectBg: "rgba(30,32,37,1)",
      heavyGrey: "#696C71",
      tint: "#DBB376",
    },
    extend: {},
  },
  plugins: [],
}
