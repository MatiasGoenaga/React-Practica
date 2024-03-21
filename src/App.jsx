import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Header from "./Header";
import ListadeLibros from "./ListadeLibros";
import LibroDetalle from "./LibroDetalle";
import Noticias from "./Noticias";
import Catalogo from "./Catalogo";
import "boxicons";

function App() {
  return (
    <BrowserRouter>
      <div className="App container as">
        <Header />
        <Routes>
          <Route path="/" Component={Home} />

          <Route path="/Catalogo" Component={Catalogo} />

          <Route path="/Noticias" Component={Noticias} />
          <Route path="/Libros">
            <Route index element={<ListadeLibros />} />
            <Route path=":id" element={<LibroDetalle />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
