import { Fragment } from "react";
import MealItemForm from "./MenuItemForm";
import classes from "./MenuItem.module.css";
const MenuItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${price}</div>
      </div>

      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MenuItem;
