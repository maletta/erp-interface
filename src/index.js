import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Provider from "./store";
import Dashboard from "./container/Dashboard";

ReactDOM.render(
  <Provider>
    {
      // <App />
    }
    <Dashboard/>
  </Provider>,
  document.getElementById("root")
);
