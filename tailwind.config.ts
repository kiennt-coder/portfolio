import daisyui from "daisyui";
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import themes from "daisyui/src/theming/themes"

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // text: "var(--text-color)",
        // main: "var(--main-color)",
        // primary: "var(--primary-color)",
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    daisyui,
    typography
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...themes["light"],
          "primary": "#80db66",
        },
        dark: {
          ...themes["dark"],
          "primary": "#80db66",
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    // darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  
  }
};
export default config;
