import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { ReactNotifications } from "react-notifications-component";
import { Provider } from "react-redux";
import "react-notifications-component/dist/theme.css";
import store from "./state/store";
import "./styles/App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ReactNotifications className="notis" />
        <App />
        <Analytics />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
