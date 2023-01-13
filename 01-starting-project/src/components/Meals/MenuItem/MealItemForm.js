import Input from "../../UI/Input";
import classes from "./MenuItemForm.module.css";
const MenuItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        input={{
          type: "number",
          id: "amount" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        label="Amount"
      />
      <button type="button">+ Add</button>
    </form>
  );
};
export default MenuItemForm;
