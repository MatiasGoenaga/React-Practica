import { useState } from "react";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { Link } from "react-router-dom";
import { useCart } from "./hooks/useCart";

const NuevosLibros = ({ nuevos_libros }) => {
  const { addToCart, cart, removeFromCart } = useCart();
  // let api = "librosnuevos.json";
  // let [fetchedData, updateFetchedData] = useState([]);
  const [show, setShow] = useState(-1);
  const checkProductInCart = (nuevos_libros) => {
    return cart.some((item) => item.id === nuevos_libros.id);
  };

  let display;

  /* useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]); */
  if (nuevos_libros) {
    display = nuevos_libros.map((x) => {
      let { id, titulo, imagen, autor, status, editorial, precio } = x;
      const isProductInCart = checkProductInCart(x);
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
            <button
              className="item"
              style={{ backgroundColor: isProductInCart ? "red" : "#09f" }}
              onClick={() => {
                isProductInCart ? removeFromCart(x) : addToCart(x);
              }}
            >
              {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
            </button>
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

                {
                  <button
                    className="item"
                    style={{
                      backgroundColor: isProductInCart ? "red" : "#09f",
                    }}
                    onClick={() => {
                      isProductInCart ? removeFromCart(x) : addToCart(x);
                    }}
                  >
                    {isProductInCart
                      ? "SACAR DEL CARRITO"
                      : "AGREGAR AL CARRITO"}
                  </button>
                }
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
