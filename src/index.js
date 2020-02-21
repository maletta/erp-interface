import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Provider from "./store";
import AppRouter from './routes';

ReactDOM.render(
  <Provider>
    {
      // <App />
    }
    <AppRouter/>
  </Provider>,
  document.getElementById("root")
);
