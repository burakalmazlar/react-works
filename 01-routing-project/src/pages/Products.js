import { Link } from "react-router-dom";

const Products = (props) => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/phone">Phone</Link>
        </li>
        <li>
          <Link to="/products/computer">Computer</Link>
        </li>
        <li>
          <Link to="/products/console">Console</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
