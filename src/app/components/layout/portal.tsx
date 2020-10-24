import * as React from "react";
import ReactDOM from "react-dom";

export const Portal = ({ children }) => {
  const element = document.querySelector("#root");
  return element ? ReactDOM.createPortal(children, element) : null;
};
