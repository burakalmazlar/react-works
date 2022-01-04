import { cartActions } from "../store/cart";
import { useDispatch, useSelector } from "react-redux";
import useNotification from "./use-notification";
import { useCallback, useEffect } from "react";

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

  const fetchCart = useCallback(async () => {
    try {
      const response = await fetch(
        "https://react-eab7b-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      dispatch(cartActions.replaceCart(data));
    } catch (error) {
      notify("", "Failed!", "Something went wrong when updating your cart.");
    }
  }, [notify, dispatch]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const updateCart = useCallback(
    async (cart) => {
      try {
        notify("", "Processing!", "Your cart is being updated.");
        const response = await fetch(
          "https://react-eab7b-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
          { method: "PUT", body: JSON.stringify({ items: cart.items }) }
        );
        if (!response.ok) {
          throw new Error();
        }
        notify("success", "Success!", "Your cart is updated successfully.");
      } catch (error) {
        notify("", "Failed!", "Something went wrong when updating your cart.");
      }
    },
    [notify]
  );

  useEffect(() => {
    if (cart.changed) {
      updateCart(cart);
    }
  }, [cart, updateCart]);

  return { cart, add, remove };
};

export default useCart;
