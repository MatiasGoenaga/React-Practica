import "./Libros.css";
import { AddToCartIcon } from "./Icons";

function Libros_2023({ nuevos_libros }) {
  return (
    <main className="products">
      <ul>
        {nuevos_libros.map((libro) => (
          <li key={libro.id}>
            <img src={libro.imagen} alt={libro.titulo} />
            <div>
              <strong>{libro.titulo}</strong>
            </div>
            <div>
              <strong>${libro.precio}</strong>
            </div>
            <div>
              <button className="botoncito">
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Libros_2023;
