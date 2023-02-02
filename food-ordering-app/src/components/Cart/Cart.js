import { Fragment, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/context-api/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import useHttpRequest from "../../hooks/http-hook";
const Cart = (props) => {
  const [showCheckout, setShowCheck] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const [didSubmitted, setDidSubmitted] = useState(false);

  const onRemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const onAddItemHandler = (item) => {
    cartCtx.addItem({
      ...item,
      amount: 1,
    });
  };

  const orderHandler = (event) => {
    setShowCheck(true);
  };

  const { isLoading, error, sendRequest: placeOrder } = useHttpRequest();
  const submitHandler = (userData) => {
    placeOrder({
      url: "https://react-http-b8814-default-rtdb.firebaseio.com/orders.json",
      method: "POST",
      body: { user: userData, orderedItems: cartCtx.items },
    });
    setDidSubmitted(true);
    cartCtx.clearCart()
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            onRemove={onRemoveItemHandler.bind(null, item.id)}
            onAdd={onAddItemHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {showCheckout && (
        <Checkout onConfirm={submitHandler} onClick={props.onHideCart} />
      )}
      {!showCheckout && modalActions}
    </Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;
  const didSubmittingModalContent = (
    <Fragment>
      <p>Successfully sent the order</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </Fragment>
  );
  return (
    <Modal onClick={props.onHideCart}>
      {!isLoading && !didSubmitted && cartModalContent}
      {isLoading && isSubmittingModalContent}
      {!isLoading && didSubmitted && didSubmittingModalContent}
    </Modal>
  );
};
export default Cart;
