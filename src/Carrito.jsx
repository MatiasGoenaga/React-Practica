import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "./hooks/useCart";
import "./Cart.css";

function CartItem({ precio, imagen, titulo, cantidad, addToCart }) {
  return (
    <li>
      <img src={imagen} alt={titulo} />
      <div>
        <strong style={{ color: "white" }}>{titulo}</strong> - ${precio}
      </div>
      <footer>
        <small>Cantidad : {cantidad} </small>
        <button onClick={addToCart}> + </button>
      </footer>
    </li>
  );
}

const Carrito = () => {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((nuevos_libros) => (
            <CartItem
              key={nuevos_libros.id}
              addToCart={() => addToCart(nuevos_libros)}
              {...nuevos_libros}
            />
          ))}
        </ul>

        <button className="clear_icon" onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};

export default Carrito;
