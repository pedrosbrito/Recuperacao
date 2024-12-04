// importando components do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

// Importação de componentes
import NavBarra from "../components/NavBarra";

// Importando o hook useState para monitorar a mudança das variáveis
import { useState, useEffect } from "react";

//Importação do navigate pra transitar entre páginas
import { useNavigate } from "react-router-dom";

// Url da api
const urlCate = "http://localhost:5000/categorias";
const urlProd = "http://localhost:5000/produtos";

const CadastroAnimais = () => {
  //Lista com categorias
  const [categorias, setCategorias] = useState([]);
  //UseEffect pra puxar os dados da api
  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(urlCate);
        const cate = await req.json();
        console.log(cate);
        setCategorias(cate);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchData();
  }, []);

  //Link produto sem imagem
  const linkImagem =
    "https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png";

  //Variáveis para o produto
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("Eletrônicos");
  const [raca, setRaca] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");

  //Variáveis para o alerta
  const [alertClass, setAlertClass] = useState("mb-3 d-none");
  const [alertMensagem, setAlertMensagem] = useState("");
  const [alertVariant, setAlertVariant] = useState("danger");

  // Criando o navigate
  const navigate = useNavigate();

  //Função pra lidar com o envio dos dados
  const handleSubmit = async (e) => {
    // Previne a página de ser recarregada
    e.preventDefault();
  
    if (nome !== "") {
      if (raca !== "") {
        const produto = { nome, categoria, raca, imagemUrl };
        console.log(produto);
        try {
          const req = await fetch(urlProd, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(produto),
          });
          const res = await req.json();
          console.log(res);
          setAlertClass("mb-3 mt-2");
          setAlertVariant("success");
          setAlertMensagem("Animal cadastrado com sucesso");
          alert("Animal cadastrado com sucesso");
          navigate("/home"); // Redireciona para a página inicial
        } catch (error) {
          console.log(error);
        }
      } else {
        setAlertClass("mb-3 mt-2");
        setAlertMensagem("O campo raca não pode ser vazio");
      }
    } else {
      setAlertClass("mb-3 mt-2");
      setAlertMensagem("O campo nome não pode ser vazio");
    }
  };
  

  return (
    <div>
      <NavBarra />
      <Container>
        <br />
        <h1>Cadastrar Animais</h1>
        <br />
        <form className="mt-3" onSubmit={handleSubmit}>
          <Row>
            <Col xs={6}>
              {/* Caixinha de nome */}
              <FloatingLabel
                controlId="floatingInputNome"
                label="Nome"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Digite o nome do produto"
                  value={nome}
                  onChange={(e) => {
                    setNome(e.target.value);
                  }}
                />
              </FloatingLabel>

              {/* Select de categorias */}
              <Form.Group controlId="formGridTipo" className="mb-3">
                <Form.Label>Tipo de Animal</Form.Label>
                <Form.Select
                  value={categoria}
                  onChange={(e) => {
                    setCategoria(e.target.value);
                  }}
                >
                  {categorias.map((cat) => (
                    <option key={cat.id} value={cat.nome}>
                      {cat.nome}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
{/* Caixinha de Raca */}
              <FloatingLabel
                controlId="floatingInputRaca"
                label="Raca"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Digite a raça do produto"
                  value={raca}
                  onChange={(e) => {
                    setRaca(e.target.value);
                  }}
                />
              </FloatingLabel>

            </Col>
            <Col xs={6}>
              <Form.Group controlId="formFileLg" className="mb-3">
                {/* Caixinha de imagem */}
                <FloatingLabel
                  controlId="floatingInputImagem"
                  label="Envie o link da imagem do produto"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Envie o link da imagem do produto"
                    value={imagemUrl}
                    onChange={(e) => {
                      setImagemUrl(e.target.value);
                    }}
                  />
                </FloatingLabel>

                <Image
                  src={imagemUrl == "" ? linkImagem : imagemUrl}
                  rounded
                  width={300}
                  height={300}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Alerta caso haja erro */}
          <Alert variant={alertVariant} className={alertClass}>
            {alertMensagem}
          </Alert>

          <Button className="btn-yellow" size="lg" type="submit">
        Cadastrar
        </Button>
        </form>
      </Container>
    </div>
  );
};

export default CadastroAnimais;
