import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalProvider } from "./components/context/globalProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
