import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListadeLibros() {
  const [libross, setLibross] = useState([]);

  useEffect(() => {
    fetch("libros.json")
      .then((res) => res.json())
      .then((datos) => setLibross(datos));
  }, []);
  console.log(libross);

  return (
    <>
      <div className="seccion_1">
        <h2 className="titulo_1 ">SEMANA DE LA NOVELA NEGRA</h2>
        <h2 className="titulo_1 ">Ofertas!!</h2>
        <main className="seccion_2">
          <ul className="lista_de_libros">
            {libross.map((libro) => (
              <li key={libro.id}>
                {libro.titulo} - {libro.autor}
                <Link className="none" to={"/Libros/" + libro.id}>
                  <i className="bx bxs-message-alt-add bx-rotate-90"></i>
                </Link>
              </li>
            ))}
          </ul>
        </main>

        <h2 className="titulo_1 ">
          ¡Disfruta del mejor policial a un precio criminal!
        </h2>
      </div>
    </>
  );
}
export default ListadeLibros;
