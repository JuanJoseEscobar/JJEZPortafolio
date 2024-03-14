import "./style.css";
import ReactDOM from "react-dom/client";
import React from "react";
import {
  RouterProvider,
} from "react-router-dom";

import {router} from "./router/index.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <React.StrictMode>
	    <RouterProvider router={router} />
    </React.StrictMode>
  </>
);