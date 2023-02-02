import Meals from "../components/Meals/Meals";
import Cart from "../components/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { showCartActions } from "../store/redux";

const CartPage = () => {
  const cartIsShown = useSelector((state) => state.showCart);
  const dispatch = useDispatch();

  const hideCartHandler = () => {
    dispatch(showCartActions.hideCart())
  };

  return (
    <>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </>
  );
};
export default CartPage;
