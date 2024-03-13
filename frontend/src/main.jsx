import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";

import { Provider } from "react-redux";
import store from "./utils/store";
import { Flowbite } from "flowbite-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Flowbite>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Flowbite>
  </React.StrictMode>
);
