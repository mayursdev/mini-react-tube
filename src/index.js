import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";

const rootEl = document.querySelector("#root");

const root = ReactDOM.createRoot(rootEl);
root.render(<App />);
