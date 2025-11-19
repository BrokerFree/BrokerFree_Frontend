import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="brokerfree.us.auth0.com"
      // domain="dev-ajf4yrl342shon86.us.auth0.com"
      clientId="0ADXwFEXJyW9JBWfN4JbkNJdP2MjBoRs"
      // clientId="1OS4NYfaa4rFi2VoTpj1sl9S7Jqd3PY1"
      audience="https://brokerfree.us.auth0.com/api/v2/"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
