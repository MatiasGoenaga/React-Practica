import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterBooks = (nuevos_libros) => {
    return nuevos_libros.filter((nuevo_libro) => {
      return (
        nuevo_libro.precio >= filters.minprice &&
        (filters.categoria == "all" ||
          nuevo_libro.categoria == filters.categoria)
      );
    });
  };
  return { filters, filterBooks, setFilters };
}
