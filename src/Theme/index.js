import lightenDarkenColor from "./utils";

class Theme {
  constructor(colors, responsiveSizes) {
    this.colors = {
      black: "#0F1311",
      goldDark: "#D29C37",
      goldLight: "#FFDEA8",
      greenDark: "#2F3E2B",
      greenLight: "#6BAA75",
      ...colors,
    };
    this.responsiveSizes = {
      xs: "0px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1800px",
      ...responsiveSizes,
    };
    this.responsiveCSSRules = {};
  }
  createTheme() {
    this.generateColorsPalette();
    this.generateResponsiveRules();
  }
  generateColorsPalette() {
    Object.keys(this.colors).map((key, i) => {
      this.colors = {
        ...this.colors,
        [key]: {
          default: this.colors[key],
          darker: lightenDarkenColor(this.colors[key], -50),
          dark: lightenDarkenColor(this.colors[key], -25),
          light: lightenDarkenColor(this.colors[key], 50),
          lighter: lightenDarkenColor(this.colors[key], 75),
          lightest: lightenDarkenColor(this.colors[key], 90),
        },
      };
    });
    return this.colors;
  }
  generateResponsiveRules() {
    Object.keys(this.responsiveSizes).map((key, i) => {
      this.responsiveCSSRules = {
        ...this.responsiveCSSRules,
        [key]: `(min-width: ${this.responsiveSizes[key]})`,
      };
    });
    return this.responsiveCSSRules;
  }
}

let theme = new Theme();
theme.createTheme();

export { theme };
