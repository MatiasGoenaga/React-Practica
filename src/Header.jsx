import { Link } from "react-router-dom";
import face from "./assets/face_blanco_50.png";
import insta from "./assets/insta_blanco_50.png";
import twiter from "./assets/twiter_blanco_50.png";
import loguito from "./assets/logo_erdosain_png.png";

function Header() {
  return (
    <>
      <nav className="header">
        <div className="sidebar">
          <Link className="none" to="/">
            Inicio
          </Link>
          <Link className="none" to="/">
            Catalogo
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
        <div className="logo">
          <img src={loguito} width="320px" alt="Logo de Libreria Erdosain" />
          <h2>Tus mejores amigos!</h2>
        </div>
      </nav>
    </>
  );
}
export default Header;
