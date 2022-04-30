import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
} from "@mui/material/colors";

// colors defined here: https://mui.com/material-ui/customization/color/
// color tool for generating themes: https://material.io/design/color/the-color-system.html#tools-for-picking-colors
// color tool for visualizing themes: https://material.io/resources/color/#!/?view.left=1&view.right=0&primary.color=f26547
// Create a theme instance.

const obtainColor = (colorString) => {
  switch (colorString) {
    case "red":
      return red;
    case "pink":
      return pink;
    case "purple":
      return purple;
    case "deepPurple":
      return deepPurple;
    case "indigo":
      return indigo;
    case "blue":
      return blue;
    case "lightBlue":
      return lightBlue;
    case "cyan":
      return cyan;
    case "teal":
      return teal;
    case "green":
      return green;
    case "lightGreen":
      return lightGreen;
    case "lime":
      return lime;
    case "yellow":
      return yellow;
    case "amber":
      return amber;
    case "orange":
      return orange;
    case "deepOrange":
      return deepOrange;
    case "brown":
      return brown;
    case "grey":
      return grey;
    case "blueGrey":
      return blueGrey;
    default:
      return undefined;
  }
};

export const themeFactory = (mode, primaryString, secondaryString) =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode: mode || "light",
        ...(mode === "light"
          ? {
              // palette values for light mode
              primary: obtainColor(primaryString) || red,
              secondary: obtainColor(secondaryString) || amber,
              text: {
                primary: grey[900],
                secondary: grey[800],
              },
            }
          : {
              // palette values for dark mode
              primary: obtainColor(primaryString) || amber,
              secondary: obtainColor(secondaryString) || pink,
              text: {
                primary: "#f5f5f5",
                secondary: grey[500],
              },
            }),
      },
    })
  );
