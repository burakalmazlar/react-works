import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import useCart from "../../hooks/use-cart";

const Cart = (props) => {
  const { cart, add, remove } = useCart();
  return (
    <Modal onClose={props.onClose}>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart {cart.items.length > 0 ? "" : "Is Empty"}</h2>
        <ul>
          {cart.items.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                onAdd={add.bind(null, item)}
                onRemove={remove.bind(null, item.id)}
              />
            );
          })}
        </ul>
        <div className={classes.actions}>
          <button onClick={props.onClose}>Close</button>
        </div>
      </Card>
    </Modal>
  );
};

export default Cart;
