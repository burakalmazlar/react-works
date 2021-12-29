import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealsMenuForm from "./MealsMenuForm";
import classes from "./MealsMenuItem.module.css";

const MealsMenuItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const ctx = useContext(CartContext);

  const addMealHandler = (value) => {
    ctx.addItem({ ...props, amount: value });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsMenuForm id={props.id} onAdd={addMealHandler} />
      </div>
    </li>
  );
};

export default MealsMenuItem;
