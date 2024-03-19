import { Link } from "react-router-dom";
import face from "./assets/face_blanco_50.png";
import insta from "./assets/insta_blanco_50.png";
import twiter from "./assets/x_blanco_50.png";
import loguito from "./assets/logo_erdosain_png.png";
import libreria from "./assets/libreria.jpg";
import estante from "./assets/estante.png";

function Header() {
  return (
    <>
      <nav className="header">
        <div className="sidebar">
          <Link className="none" to="/">
            Inicio
          </Link>
          <Link className="none" to="/Catalogo">
            Películas
          </Link>
          <Link className="none" to="/Noticias">
            Noticias
          </Link>
          <div className="dropdown">
            <button className="dropbtn">Redes</button>
            <div className="dropdown-contenido">
              <Link to="#">
                <img src={face} />
              </Link>
              <Link to="#">
                <img src={insta} />
              </Link>
              <Link to="#">
                <img src={twiter} />
              </Link>
            </div>
          </div>
        </div>
        <div className="front">
          <img
            className="libreria"
            src={libreria}
            width="300px"
            alt="Imagen de una libreria "
          />
          <div className="logo">
            <img src={loguito} width="320px" alt="Logo de Libreria Erdosain" />
            <h2>Tus mejores amigos!</h2>
          </div>
          <img
            className="estante"
            src={estante}
            width="390px"
            alt="Imagen de un estante "
          />
        </div>
      </nav>
    </>
  );
}
export default Header;
