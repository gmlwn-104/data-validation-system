import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1e3c72",
    },
    secondary: {
      main: "#2a5298",
    },
    background: {
      default: "#f5f7fb",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h4: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;