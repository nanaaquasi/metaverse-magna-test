import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/Auth/SignUp.tsx";
import Login from "./pages/Auth/Login.tsx";
import WelcomePage from "./pages/Welcome/WelcomePage.tsx";
import InterestPage from "./pages/Interests/InterestPage.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import ProtectedRoute from "./components/shared/ProtectedRoute.tsx";
import jwtService from "./services/jwt.service.ts";
import "./App.scss";
const token = jwtService.getItem("token");

const isAuth = token ? true : false;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/welcome",
    element: <WelcomePage />,
  },

  {
    path: "/interests",
    element: (
      <ProtectedRoute isAllowed={isAuth}>
        <InterestPage />
      </ProtectedRoute>
    ),
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute isAllowed={isAuth}>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
