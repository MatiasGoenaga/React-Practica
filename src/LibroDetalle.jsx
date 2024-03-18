import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function LibroDetalle() {
  const { id } = useParams();
  const [libro, setLibro] = useState({});

  useEffect(() => {
    fetch("https://654ee8b9358230d8f0cce4c3.mockapi.io/libross/" + id)
      .then((res) => res.json())
      .then((dato) => setLibro(dato));
  }, [id]);
  console.log(libro);
  console.log(id);

  return (
    <>
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="card-body">
                <h1 className="card-title principal">{libro.titulo}</h1>
                <h2 className="card-title secundario">{libro.autor}</h2>
                <h5 className="card-title">
                  <span>Editorial:</span> {libro.editorial}
                </h5>
                <p className="card-text card_1">{libro.descripcion}</p>
                <h3 className="card-title">$ {libro.precio}</h3>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={libro.imagen}
                className="img-fluid rounded mx-auto d-block imagen"
                alt="imagen libro"
              />
            </div>
          </div>
        </div>
        <section className="back  ">
          <Link to={"/"} className="none volver">
            <i className="bx bxs-left-arrow bx-md"></i>
            Volver
          </Link>
        </section>
        <footer>
          <p className="copy">&copy; 2023 - Web Design by El Astrólogo</p>
        </footer>
      </div>
    </>
  );
}

export default LibroDetalle;
