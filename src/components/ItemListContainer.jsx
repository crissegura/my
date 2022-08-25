import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TarjetaProductos() {
    return (
      <Card style={{ width: '18rem', margin:'20px',textAlign:'center' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Producto X</Card.Title>
          <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat adipisci assumenda ad, id repudiandae ratione dignissimos maiores.
          </Card.Text>
          <Button variant="primary">hacer algo</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default TarjetaProductos;