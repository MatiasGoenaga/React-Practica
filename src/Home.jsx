import { useState } from "react";
import { nuevos_libros as initialBooks } from "./assets/nuevoslibros_2024.json";
import { useFilters } from "./hooks/useFilters";
import ListadeLibros from "./ListadeLibros";
import NuevosLibros from "./NuevosLibros";
import Filters from "./Filters";
import Carrito from "./Carrito";
import { CartProvider } from "./context/cart";

function Home() {
  const [nuevos_libros] = useState(initialBooks);
  const { filterBooks } = useFilters();

  const filteredBooks = filterBooks(nuevos_libros);

  return (
    <CartProvider>
      <>
        <ListadeLibros />
        <div className="content">
          <Filters />
          <Carrito />
          <div className="row mt-4 row_1">
            <NuevosLibros nuevos_libros={filteredBooks} />
          </div>
        </div>
      </>
    </CartProvider>
  );
}
export default Home;
