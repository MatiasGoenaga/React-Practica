import Header from "./Header";
import ListadeLibros from "./ListadeLibros";
import librito from "/retratos.jpg";

function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <ListadeLibros />
        <div className="logo">
          <img src={librito} width="320px" alt="Logo de Libreria Erdosain" />
          <h2>SUPER OFERTA ESPECIAL!</h2>
        </div>
      </div>
    </>
  );
}
export default Home;
