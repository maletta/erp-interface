import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Provider from "./store";
import AppRouter from "./routes";
import { StylesProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <Provider>
    <StylesProvider>
      <CssBaseline/>
      {
        // <App />
      }
      <AppRouter />
    </StylesProvider>
  </Provider>,
  document.getElementById("root")
);
