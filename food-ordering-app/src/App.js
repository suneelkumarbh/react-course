import React, { useState } from "react";
import Cart from "./pages/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ProfilePage from "./pages/Profile"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Cart /> },
        { path: 'profile', element: <ProfilePage /> }
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
