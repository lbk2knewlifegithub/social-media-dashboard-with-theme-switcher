const { join } = require("path");
const defaultTheme = require("tailwindcss/defaultTheme");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: "jit",
  purge: {
    enabled: isProduction,
    content: [join(__dirname, "src/**/*.{html,ts}")],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
      },
    },
    extend: {
      // create custom fonts here
      fontFamily: {
        mono: ["'Inter'", ...defaultTheme.fontFamily.mono],
      },
      // create custom text colors here
      textColor: {
        fill: withOpacity("--text-fill"),
        muted: withOpacity("--text-muted"),
        success: withOpacity("--text-success"),
        danger: withOpacity("--text-danger"),
      },

      // create custom background colors here
      backgroundColor: {
        fill: withOpacity("--bg-fill"),
        "top-bg": withOpacity("--bg-top-pattern"),
        card: withOpacity("--bg-card"),
        facebook: withOpacity("--bg-facebook"),
        twitter: withOpacity("--bg-twitter"),
        youtube: withOpacity("--bg-youtube"),
        toggle: withOpacity("--bg-toggle"),
      },
      // create custom gradient color here
      gradientColorStops: {
        "instagram-start": withOpacity("--instagram-start"),
        "instagram-end": withOpacity("--instagram-end"),
        "toggle-start": withOpacity("--toggle-start"),
        "toggle-end": withOpacity("--toggle-end"),
      },
    },
    // custom variants
    variants: {
      extend: {
        backgroundColor: ["active"],
      },
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/aspect-ratio"),
    ],
  },
};
