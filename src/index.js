import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Pages/Login/Login';
import Sign from './Pages/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "login",
    element: <Login/>,
  },

  {
    path: "signup",
    element: <Sign />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);

reportWebVitals();
