import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Otp from "./pages/Otp.jsx";
import BlogForm from "./component/BlogForm.jsx";
import Blogs from "./pages/Blogs.jsx";
import Chat from "./pages/Chat.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/otp",
        element: <Otp />,
      },
      {
        path: "/blogs",
        children: [
          {
            path: "/blogs/",
            element: <Blogs />,
          },
          {
            path: "/blogs/create",
            element: <BlogForm />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
