import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const entryBlock = document.querySelector("#root");
const renderFunction = entryBlock.hasChildNodes()
  ? ReactDOM.hydrate
  : ReactDOM.render;

renderFunction(<App />, entryBlock);

