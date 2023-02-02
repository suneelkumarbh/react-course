import classes from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { showCartActions } from "../../store/redux";
const Header = (props) => {

  const dispatch = useDispatch()
  const showCartHandler = () => {
    dispatch(showCartActions.showCart())
  }

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={showCartHandler}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="table full of meals"/>
      </div>
    </Fragment>
  );
};

export default Header;
