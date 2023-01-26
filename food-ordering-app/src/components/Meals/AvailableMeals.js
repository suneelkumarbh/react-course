import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MenuItem from "./MenuItem/MenuItem";
import useHttpRequest from "../../hooks/http-hook";
import { useEffect, useState } from "react";

const AvailableMeals = (props) => {
  const { isLoading, error, sendRequest: fetchMeals } = useHttpRequest();

  const [meals, setMeals] = useState([]);
  const applyData = (data) => {
    let meals_data = [];
    for (const key in data) {
      meals_data.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }
    setMeals(meals_data);
  };

  useEffect(() => {
    fetchMeals(
      {
        url: "https://react-http-b8814-default-rtdb.firebaseio.com/meals.json",
      },
      applyData
    );
  }, []);

  const mealsList = meals.map((meal) => (
    <MenuItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading) {
    return (
      <section className={classes["meals-loading-section"]}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes["error-message"]}>
        <p>{error}</p>
      </section>
    );
  }
  return (
    <Card className={classes.meals}>
      <ul>{mealsList}</ul>
    </Card>
  );
};

export default AvailableMeals;
