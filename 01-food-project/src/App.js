import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const switchCartVisibility = () => {
    setCartIsVisible((prev) => !prev);
  };

  return (
    <CartProvider>
      {cartIsVisible && <Cart onCartSwitch={switchCartVisibility}></Cart>}
      <Header onCartSwitch={switchCartVisibility} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
