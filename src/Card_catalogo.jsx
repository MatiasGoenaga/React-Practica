import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Card_catalogo = () => {
  const { imdbID } = useParams();
  let [fetchedData, updateFetchedData] = useState({});
  let api = `https://65ffaca7df565f1a61453209.mockapi.io/moviess/${imdbID}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="container  text-center border">
      <img
        className="img mt-4 mb-4 "
        src={fetchedData.Poster}
        alt="poster de la pelicula"
      />
      <h1>
        {fetchedData.Title} <span className="mitad">{fetchedData.Year}</span>
      </h1>
      <h2>Director: {fetchedData.Director}</h2>
      <h2>Protagonistas: {fetchedData.Actors}</h2>
    </div>
  );
};

export default Card_catalogo;
