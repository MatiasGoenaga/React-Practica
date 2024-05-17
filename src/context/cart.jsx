import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (nuevos_libros) => {
    //    setCart([...cart, libro])
    const libroEnCartIndex = cart.findIndex(
      (item) => item.id == nuevos_libros.id
    );
    if (libroEnCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[libroEnCartIndex].cantidad += 1;
      return setCart(newCart);
    }

    setCart((prevState) => [
      ...prevState,
      {
        ...nuevos_libros,
        cantidad: 1,
      },
    ]);
  };
  const removeFromCart = (nuevos_libros) => {
    setCart((prevState) =>
      prevState.filter((item) => item.id != nuevos_libros.id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
