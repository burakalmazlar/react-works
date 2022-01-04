import useCart from "../../hooks/use-cart";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { product } = props;
  const { title, price, description } = product;

  const { add } = useCart();

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={add.bind(null, product)}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
