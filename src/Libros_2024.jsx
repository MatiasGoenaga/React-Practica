import { nuevos_libros } from "./assets/nuevoslibros_2024.json";
import Libros_2023 from "./Libros_2023";

const Libros_2024 = () => {
  return (
    <>
      <div className="content">
        <div className="row mt-4 row_1">
          <Libros_2023 nuevos_libros={nuevos_libros} />
        </div>
      </div>
    </>
  );
};

export default Libros_2024;
