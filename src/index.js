import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Provider from "./state/store";
import AppRouter from "./routes";
import CssBaseline from '@material-ui/core/CssBaseline';
import EnhancedThemeProvider from "./components/atoms/EnhancedThemeProvider";

ReactDOM.render(
  <Provider>
    <EnhancedThemeProvider>
      <CssBaseline />
      {
        // <App />
      }
      <AppRouter />
    </EnhancedThemeProvider>
  </Provider>,
  document.getElementById("root")
);
