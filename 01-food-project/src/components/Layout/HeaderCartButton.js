import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const { items } = ctx;

  const totalMeals = items.reduce((total, meal) => total + meal.amount, 0);

  const [bumper, setBumper] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBumper(true);
    const timer = setTimeout(() => {
      setBumper(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <>
      <button
        className={`${classes.button} ${bumper ? classes.bump : ""}`}
        onClick={props.onCartSwitch}
      >
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>{totalMeals}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
