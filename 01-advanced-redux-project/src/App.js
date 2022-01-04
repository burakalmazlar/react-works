import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notifications";
import useNotification from "./hooks/use-notification";

function App() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const { notification } = useNotification();
  return (
    <>
      {notification && <Notification notification={notification} />}
      <Layout onToggleCart={toggleCart}>
        {showCart && <Cart onClose={toggleCart} />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
