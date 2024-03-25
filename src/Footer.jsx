import { Link } from "react-router-dom";
import face from "./assets/face_blanco_50.png";
import insta from "./assets/insta_blanco_50.png";
import twiter from "./assets/x_blanco_50.png";

const Footer = () => {
  return (
    <div className="footer uno">
      <div className="flex ">
        <Link to="/">
          <img src={face} alt="Facebook" />
        </Link>
        <Link to="#">
          <img src={insta} alt="Instagram" />
        </Link>
        <Link to="#">
          <img src={twiter} alt="Twitter" />
        </Link>
      </div>
      <div className="calle fw-bold">
        <p>
          <i className="bx bxs-map"></i> Roberto Arlt 1942 - Temperley - Lomas
          de Zamora - Buenos Aires
        </p>
      </div>

      <p className="copy">&copy; 2023 - Web Design by El Astrólogo</p>
    </div>
  );
};

export default Footer;
