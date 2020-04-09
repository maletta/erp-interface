import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Provider from "./store";
import AppRouter from "./routes";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/';


const theme = createMuiTheme({
  overrides: {
    // MuiCssBaseline: {
    //   '@global': {
    //     fontSize: 2 
    //   },
    // },
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
      main: "#034",
    },
  },
});



ReactDOM.render(
  <Provider>
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      {
        // <App />
      }
      <AppRouter />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
