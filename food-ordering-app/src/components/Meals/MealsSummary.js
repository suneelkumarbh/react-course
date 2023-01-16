import classes from "./MealsSummary.module.css";
const MealsSummary = () => {
  return (
    <div className={classes.summary}>
      <h2>Delicious Food, Delivered to You</h2>
      <p>
        Choose your favourite meal from our board selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        Are our meals are cooked with high-quality ingredients, just-in-time of
        course by experience chefs
      </p>
    </div>
  );
};

export default MealsSummary;
