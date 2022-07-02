import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { Provider } from "react-redux/es/exports";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
