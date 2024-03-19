import { useEffect, useState } from "react";

const NuevosLibros = () => {
  let api = "librosnuevos.json";
  let [fetchedData, updateFetchedData] = useState([]);
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
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark margenes"
        >
          <div className="d-flex flex-column justify-content-center">
            <img className="img img-fluid" src={imagen} alt="" />
            <div className="fs-3 fw-bold mb-6 text-center">{titulo}</div>
            <div className="fs-3 fw-bold text-center">{autor}</div>
            <div className="fs-4 text-center">{editorial}</div>
            <div className="fs-4 text-center">$ {precio}</div>
            {(() => {
              if (status === "Super Oferta") {
                return (
                  <div className="badge position-absolute bg-danger">
                    {status}
                  </div>
                );
              } else {
                return;
              }
            })()}
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
