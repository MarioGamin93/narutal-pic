import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import { Provider } from "./ContextApi";

export default function App() {

  return (
    <div className="App">
      
    {/* Aqui llamando el componente donde esta la creacion del contexto y encerrando los demas componentes dentro, para luego utilizar las valores */}
     <Provider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
     </Provider>

    </div>
  );
}
