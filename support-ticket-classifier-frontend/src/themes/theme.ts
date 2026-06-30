import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    h3: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
  },
});

export default theme;
