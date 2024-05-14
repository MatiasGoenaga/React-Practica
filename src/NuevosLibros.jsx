import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NuevosLibros = () => {
  let api = "librosnuevos.json";
  let [fetchedData, updateFetchedData] = useState([]);
  const [show, setShow] = useState(-1);

  let display;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  if (fetchedData) {
    display = fetchedData.map((x) => {
      let { id, titulo, imagen, autor, status, editorial, precio } = x;
      return (
        <div
          key={id}
          className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark "
          onMouseEnter={() => setShow(id)}
          onMouseLeave={() => setShow(-1)}
        >
          <div className="d-flex flex-column justify-content-center">
            <img className="img img-fluid" src={imagen} alt="" />
            <div className="fs-3 fw-bold mb-6 text-center">{titulo}</div>
            <div className="fs-3 fw-bold text-center">{autor}</div>
            <div className="fs-4 text-center">{editorial}</div>
            <div className="fs-4 text-center">$ {precio}</div>
            {(() => {
              if (precio <= 12000) {
                return (
                  <div className="badge position-absolute bg-danger">
                    {status}
                  </div>
                );
              } else if (precio >= 12001) {
                return (
                  <div className="badge position-absolute bg-success">
                    {status}
                  </div>
                );
              } else {
                return;
              }
            })()}
            {show === id ? (
              <div className="libro_detalle">
                <Link to={`/${id}`}>
                  <button className="item">VER DETALLE</button>
                </Link>

                <button className="item">AGREGAR AL CARRITO</button>
              </div>
            ) : null}
          </div>
        </div>
      );
    });
  } else {
    display = "No hay nada";
  }

  return <>{display}</>;
};

export default NuevosLibros;
