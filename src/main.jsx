import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SideContextProvider } from "./context/SideContext.jsx";
const queryCient = new QueryClient();

const colors = {
  primary: "#a098e4",
  secondary: "#6c5cd4",
  white: "#fff",
  light_1: "#F1F4F5",
  light_2: "#DDDEE5",
  dark: "#0F2655",
  darkGreen: "#08b15f",
  green: "#1AE080",
  blue: "#4267B2",
  blueShade1: "#0d4bc69a",
  remove: "#da333363",
  removeHover: "#da3333",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <ThemeProvider theme={colors}>
        <QueryClientProvider client={queryCient}>
          <SideContextProvider>
            <App />
          </SideContextProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  </>
);
