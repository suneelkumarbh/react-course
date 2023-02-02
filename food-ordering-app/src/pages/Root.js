import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";
import CartProvider from "../store/context-api/CartProvider";

const RootLayout = () => {
  return (
    <CartProvider>
      <Header />
      <Outlet />
    </CartProvider>
  );
};
export default RootLayout;
