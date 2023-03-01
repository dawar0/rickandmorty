import { ThemeOptions } from "@mui/material";
import { grey } from "@mui/material/colors";

export const getTheme = (): ThemeOptions => ({
  components: {
    MuiTextField: {
      defaultProps: {
        InputProps: {
          disableUnderline: true,
        },
      },

      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            borderRadius: 20,
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          "& ::-webkit-scrollbar": {
            width: "5px",
            background: "transparent",
          },
          "& ::-webkit-scrollbar-thumb": {
            background: "rgba(127,127,127,0.4)",
            borderRadius: "10px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "2px solid ",
          borderColor: grey[800],
          borderRadius: 20,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: grey[800],

          ":focus": {
            boxShadow: "none",
            outline: "1px solid #fff",
          },
          ":active": {
            boxShadow: "none",
          },
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: grey[500],
    },

    divider: "white",
    background: {
      default: grey[900],
      paper: grey[900],
    },
    text: {
      primary: "#fff",
      secondary: grey[500],
    },
  },
});
