import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { getTheme } from "../themes/theme";

export default function ThemeApp({ children }: { children: React.ReactNode }) {
  const theme = createTheme(getTheme());

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
}
