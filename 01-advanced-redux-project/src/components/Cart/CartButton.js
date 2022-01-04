import useCart from "../../hooks/use-cart";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const { cart } = useCart();
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>
        {(cart.items || []).reduce((q, i) => q + i.quantity, 0)}
      </span>
    </button>
  );
};

export default CartButton;
