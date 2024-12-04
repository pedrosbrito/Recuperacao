import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importação das páginas
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro"; // Página de cadastro
import CadastroAnimais from "./pages/CadastroAnimais";
import EditarAnimais from "./pages/EditarAnimais";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} /> {/* Rota do Cadastro */}
          <Route path="/animais/cadastrar" element={<CadastroAnimais />} />
          <Route path="/animais/editar/:id" element={<EditarAnimais />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
