import { useCallback, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    const response = await fetch(
      "https://react-eab7b-default-rtdb.europe-west1.firebasedatabase.app/products.json"
    );
    const result = await response.json();
    const fetchedProducts = [];
    for (const id in result) {
      const product = { id, ...result[id] };
      fetchedProducts.push(product);
    }
    setProducts(fetchedProducts);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </ul>
    </section>
  );
};

export default Products;
