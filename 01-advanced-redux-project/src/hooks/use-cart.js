import { cartActions } from "../store/cart";
import { useDispatch, useSelector } from "react-redux";
import useNotification from "./use-notification";
import { useCallback, useEffect } from "react";

let init = false;

const useCart = () => {
  const { notify } = useNotification();

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const add = (item) => {
    dispatch(cartActions.addItem({ item }));
  };

  const remove = (id) => {
    dispatch(cartActions.removeItem({ id }));
  };

  const updateCart = useCallback(async (cart) => {
    fetch(
      "https://react-eab7b-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      { method: "PUT", body: JSON.stringify(cart) }
    );
  }, []);

  useEffect(() => {
    if (init) {
      updateCart(cart);
      notify("success", "Success!", "Your cart is updated successfully.");
    }

    return () => {
      init = true;
    };
  }, [cart, updateCart, notify]);

  return { cart, add, remove };
};

export default useCart;
