import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () => {
  const cart = useContext(CartContext);

  if (cart == undefined) {
    throw new Error("Error en el contexto del provider");
  }

  return cart;
};
