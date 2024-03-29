import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card_movies = () => {
  let api = "movies.json";
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
      let { imdbRating, Title, Poster, imdbID } = x;
      return (
        <Link
          to={`/Catalogo/${imdbID}`}
          key={imdbID}
          className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark mitad "
        >
          <div className="d-flex flex-column justify-content-center">
            <img className="img img-fluid" src={Poster} alt="" />
            <div className="fs-3 fw-bold mb-6 text-center">{Title}</div>

            {(() => {
              if (imdbRating >= 7.5 && imdbRating <= 7.9) {
                return (
                  <div className="badge position-absolute bg-danger">
                    Recomendada
                  </div>
                );
              } else if (imdbRating >= 8) {
                return (
                  <div className="badge position-absolute bg-primary">
                    Imprescindible
                  </div>
                );
              } else {
                return;
              }
            })()}
            <div className="circulo position-absolute">
              <div className="ratings">
                <span className="mitad">{imdbRating}</span>
              </div>
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = "No hay nada";
  }

  return <>{display}</>;
};

export default Card_movies;
