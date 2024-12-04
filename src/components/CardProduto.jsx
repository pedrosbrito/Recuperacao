import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardProduto = (props) => {
  // Função pra deletar um produto
  const handleDelete = async (e) => {
    const req = await fetch(`http://localhost:5000/produtos/${props.id}`, {
      method: "DELETE",
    });
    const res = await req.json();
    console.log(res);
    alert(`Animal ${res.nome} adotado`);
  };

  return (
    <div>
      <Card style={{ width: "15rem", height: "30rem" }}>
        {/* Imagem do Card */}
        <Card.Img variant="top" src={props.imagemUrl} height="200px"  />

        <Card.Body>
          {/* Título do card com nome do produto */}
          <Card.Title>{props.nome}</Card.Title>
          {/* Subtitulo no card com preço do produto */}
          <Card.Subtitle className="mb-2 text-muted">
            Raça: {props.raca}
          </Card.Subtitle>
          
          {/* Removido a exibição da descrição */}
          {/* <Card.Text>
            <b> Descrição: </b> <br></br> {props.descricao}
          </Card.Text> */}

          <Card.Text>
            <b> Categoria: </b> <br></br> {props.categoria}
          </Card.Text>

          <Card.Link href={`/animais/editar/:id${props.id}`}>
            <Button variant="warning">Editar</Button>
          </Card.Link>

          <Card.Link href="/home">
            <Button variant="danger" type="button" onClick={handleDelete}>
              Adotar
            </Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduto;
