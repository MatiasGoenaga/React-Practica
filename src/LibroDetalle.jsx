import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <div className="container  text-center border">
        <div className="row row_1">
          <div className="col-md-6">
            <div className="card-body card_2 ">
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
              className=" img img-fluid rounded float-end  imagen"
              alt="imagen libro"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LibroDetalle;
