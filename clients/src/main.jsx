import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App.jsx";
import theme from "./Theme/Theme.jsx";

import { UserProvider } from "./Context/UserContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </UserProvider>
  </StrictMode>,
);

