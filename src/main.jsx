import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { FiltersProvider } from "./context/filters.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
);
