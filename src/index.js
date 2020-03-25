import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Provider from "./store";
import AppRouter from "./routes";
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/'


const theme = createMuiTheme({
  overrides: {
  },
  palette: {
    type: "light",
    primary: {
      main: "#e74c3c",
      light: "#ffcccc",// fab1a0, FFAAAA
      dark: "#D46A6A", //D46A6A
      contrastText: '#2f3542',
    },
    secondary: {
      main: "#FE6",
    },
  },
});



ReactDOM.render(
  <Provider>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      {
        // <App />
      }
      <AppRouter />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
