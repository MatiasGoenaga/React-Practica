import { useId } from "react";
import { useFilters } from "./hooks/useFilters";

const Filters = () => {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoriaFilterId = useId();

  const handlePrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minprice: event.target.value,
    }));
  };

  const handleCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      categoria: event.target.value,
    }));
  };
  return (
    <div className="row mt-4 row_1" style={{ textAlign: "center" }}>
      <div className="col-12 mb-4 position-relative text-dark filters">
        <div className="fs-3 fw-bold mb-6 text-center">
          <label htmlFor={minPriceFilterId}>Precio Mínimo</label>
          <input
            type="range"
            id={minPriceFilterId}
            min="0"
            max="25000"
            onChange={handlePrice}
            value={filters.minprice}
          />
          <span>${filters.minprice}</span>
        </div>
        <div className="fs-3 fw-bold mb-6 text-center">
          <label htmlFor={categoriaFilterId}>Categoría</label>
          <select id={categoriaFilterId} onChange={handleCategory}>
            <option value="all">Todas</option>
            <option value="novela">Novela</option>
            <option value="cuentos">Cuentos</option>
            <option value="ensayo">Ensayo</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
