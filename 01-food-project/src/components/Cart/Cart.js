import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Popup from "../UI/Popup";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const orderReady = ctx.items.length > 0;

  const addAmount = (meal) => {
    ctx.addItem({ ...meal, amount: 1 });
  };

  const removeAmount = (mealId) => {
    ctx.removeItem(mealId);
  };

  return (
    <Popup onCartSwitch={props.onCartSwitch}>
      <ul>
        {ctx.items.map((meal) => (
          <CartItem
            key={meal.id}
            name={meal.name}
            price={meal.price}
            amount={meal.amount}
            onAdd={addAmount.bind(null, meal)}
            onRemove={removeAmount.bind(null, meal.id)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCartSwitch}>
          Close
        </button>
        {orderReady && <button className={classes["button"]}>Order</button>}
      </div>
    </Popup>
  );
};

export default Cart;
