import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-screen-xl mx-auto">
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router}> </RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </div>
);
