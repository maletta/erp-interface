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
      main: "rgb(192,80,77)",// "#e74c3c"
      light: "rgb(246,231,230)",// #ffcccc fab1a0, FFAAAA
      lighter: "rgb(246,246,251)",
      dark: "rgb(192,80,77)", //D46A6A 
      contrastText: '#fafafa',
    },
    secondary: {
      main: "#034",
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    }
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
