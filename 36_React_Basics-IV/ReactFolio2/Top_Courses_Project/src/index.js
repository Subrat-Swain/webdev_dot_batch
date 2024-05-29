import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import toast
import { ToastContainer } from "react-toastify";
// css
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
      <App />
      <ToastContainer/>
  </div>
);
