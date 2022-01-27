import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Router } from "react-router-dom";
import Apptest from "./Apptest";
import Sample from "./components/sample";

ReactDOM.render(
  <React.StrictMode>
    <Apptest />
  </React.StrictMode>,
  document.getElementById("root")
);
