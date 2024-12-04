import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";

const NavBarra = () => {
  const usuarioNome = localStorage.getItem("userName");

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const [activeButton, setActiveButton] = useState(location.pathname);

  if (isLoginPage) {
    return null;
  }

  const handleButtonClick = (path) => {
    setActiveButton(path);
  };

  return (
    <div>
      <Navbar expand="lg" bg="warning" variant="white">
        <Container>
          {/* Logo da empresa */}
          <Navbar.Brand href="/home" className="d-flex align-items-center">
            <img
              src="data:image/jpeg;base64,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"
              alt="Logo Super Doces"
              style={{ width: "90px", height: "90px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="minha-nav" />

          <Navbar.Collapse id="minha-nav" className="justify-content-center">
           
            <Nav>
              <Nav.Link
                href="/home"
                onClick={() => handleButtonClick("/home")}
                className={`nav-item ${
                  activeButton === "/home" ? "active-button" : ""
                }`}
              >
                Páginas de Animais
              </Nav.Link>
              <Nav.Link
                href="/animais/cadastrar"
                onClick={() => handleButtonClick("/animais/cadastrar")}
                className={`nav-item ${
                  activeButton === "/animais/cadastrar" ? "active-button" : ""
                }`}
              >
                Cadastrar Animais
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* Área do usuário e sair */}
          <Nav className="ms-auto d-flex align-items-center">
            <Navbar.Text className="me-2" style={{ color: "dark" }}>
              Usuário: {usuarioNome}
            </Navbar.Text>
            <Nav.Link
              href="/login"
              className="logout-button"
              style={{
                backgroundColor: "#dc3545", 
                color: "#fff",
                padding: "5px 10px",
                borderRadius: "5px",
                border: "1px solid #dc3545",
                textAlign: "center",
              }}
            >
              Sair
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Estilo do botão ativo */}
      <style jsx>{`
        .active-button {
          background-color: #d39e00 !important;
          color: #fff !important;
          border-radius: 5px;
        }
        .nav-item {
          margin: 0 10px;
        }
        .logout-button:hover {
          background-color: #c82333;
          border-color: #bd2130;
        }
      `}</style>
    </div>
  );
};

export default NavBarra;
