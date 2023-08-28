import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HttpClient from "./network/http";
import ChatService from "./service/chat";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const baseURL = process.env.BASE_URL;
const httpClient = new HttpClient(baseURL);
const chatService = new ChatService(httpClient);

root.render(
  <React.StrictMode>
    <App chatService={chatService} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
