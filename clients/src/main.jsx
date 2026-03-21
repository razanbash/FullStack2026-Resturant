import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import theme from "./Theme/Theme.jsx";

import { UserProvider } from "./Context/UserContext.jsx";
import { MenuProvider } from "./Context/MenuContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <UserProvider>
      <MenuProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </MenuProvider>
    </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);

