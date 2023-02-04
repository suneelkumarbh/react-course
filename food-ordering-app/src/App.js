import React, { useState } from "react";
import Cart from "./pages/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ProfilePage from "./pages/Profile";
import LoginPage, { action as loginAction } from "./pages/Login";
import SignupPage, { action as signUpAction } from "./pages/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Cart /> },
        { path: "profile", element: <ProfilePage /> },
        { path: "login", element: <LoginPage />, action: loginAction },
        { path: "signup", element: <SignupPage />, action: signUpAction },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
