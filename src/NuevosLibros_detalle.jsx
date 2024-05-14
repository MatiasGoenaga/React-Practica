import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NuevosLibros_detalle = () => {
  const { id } = useParams();
  let api = `https://662405c904457d4aaf9b742a.mockapi.io/resuults/${id}`;
  const [libro, setLibro] = useState({});

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setLibro(data);
    })();
  }, []);

  return (
    <div className="text-center">
      <h1>{libro.titulo}</h1>
      <img src={libro.imagen} alt="" />
      <p>{libro.precio}</p>
    </div>
  );
};

export default NuevosLibros_detalle;
