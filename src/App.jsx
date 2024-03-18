import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import ListadeLibros from "./ListadeLibros";
import LibroDetalle from "./LibroDetalle";
import Noticias from "./Noticias";
import "boxicons";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Noticias" Component={Noticias} />
        <Route path="/Libros">
          <Route index element={<ListadeLibros />} />
          <Route path=":id" element={<LibroDetalle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
