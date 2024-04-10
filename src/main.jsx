import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";
import { Provider } from "react-redux";
import "react-notifications-component/dist/theme.css";
import store from "./state/store";
import "./styles/App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ReactNotifications className="notis" />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
