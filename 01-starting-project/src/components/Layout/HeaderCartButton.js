import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const [btcHighlighted, setBtnHighlighted] = useState(false);
  const cartCxt = useContext(CartContext);
  const numberOfItems = cartCxt.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  const { items } = cartCxt
  useEffect(() => {
    if(cartCxt.items.length === 0)
    {
      return;
    }
    setBtnHighlighted(true);

    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300)

    return () => {
      clearTimeout(timer);
    }
  }, [items]);
  const btcClasses = `${classes.button} ${btcHighlighted ? classes.bump: ''}`;
  return (
    <button className={btcClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};
export default HeaderCartButton;
