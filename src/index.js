import React from "react";

import ReactDOM from "react-dom/client";

import { Provider } from "react-redux/es/exports";
import { BrowserRouter as Router } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import App from "./App";
import store from "./store";

import "./styles/index.css";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
