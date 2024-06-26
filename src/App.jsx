import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Header from "./Header";
import ListadeLibros from "./ListadeLibros";
import LibroDetalle from "./LibroDetalle";
import Noticias from "./Noticias";
import Catalogo from "./Catalogo";
import "boxicons";
import Card_catalogo from "./Card_catalogo";
import Footer from "./Footer";
import NuevosLibros_detalle from "./NuevosLibros_detalle";
import Libros_2024 from "./Libros_2024";

function App() {
  return (
    <BrowserRouter>
      <div className="App container as">
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/:id" Component={NuevosLibros_detalle} />
          <Route path="/Catalogo" Component={Catalogo} />
          <Route path="/Catalogo/:imdbID" Component={Card_catalogo} />
          <Route path="/Nuevos_Libros" Component={Libros_2024} />
          <Route path="/Noticias" Component={Noticias} />
          <Route path="/Libros">
            <Route index element={<ListadeLibros />} />
            <Route path=":id" element={<LibroDetalle />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
