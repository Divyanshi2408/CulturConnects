import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-1lxg3fk71kaqu6it.us.auth0.com"
     clientId="FDG4dk98FVpoGMnFyOPdmefqG4ChdYDO"
     authorizationParams={{
     redirect_uri: "https://cultur-connects.vercel.app"
    //  redirect_uri: "http://localhost:5173"
     }}
     audience="https://dev-1lxg3fk71kaqu6it.us.auth0.com/api/v2/"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
