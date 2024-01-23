import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./lib/router.tsx";
import { Provider } from "react-redux";
import store from "./lib/redux/store.ts";
import "./globals.css"

async function enableMocking() {
  const { worker } = await import("./mocks/browser.ts");

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
});
